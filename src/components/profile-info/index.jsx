import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Profile from "./styles";
import * as Form from "components/form";
import * as Buttons from "components/buttons";
import noAvatar from "assets/images/avatar.jpeg";
import CloseIcon from "assets/svg/close.svg";
import { toast } from "react-toastify";
import { UserServices } from "services/api/user";
import { encoded, decoded } from "utils/buffer";
import { Validation } from "utils/validation";
import { TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button'


const ProfileInfo = ({ dataUser }) => {

    const navigate = new useNavigate();
    const userService = new UserServices();
    const _ = new Validation();
    const [loading, setLoading] = useState(false);

    const [photo, setPhoto] = useState({ base64: "", name: "", file: "" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        nickname: "",
        description: "",
        photo,
    });
    const [disable, setDisable] = useState(false);

    const MAX_SIZE_IMAGE = 2000000;

    const formChange = (event) =>
        setFormData({ ...formData, [event.target.name]: event.target.value });

    const ShowPreviewImage = async (e) => {
        let file = e.target.files[0];
        if (!isFormatAllowed(file))
            return toast.error("Formato de image não permitido");
        if (!isSizeAllowed(file))
            return toast.error(
                `O tamanho da imagem não pode passar de ${MAX_SIZE_IMAGE / 1000000
                }mb`
            );

        const base64 = await imageToBase64(file);
        setPhoto({ raw: file, file: base64, name: file.name });
    };
    const isSizeAllowed = (file) => file.size < MAX_SIZE_IMAGE;
    const isFormatAllowed = (file) => {
        const format = file.type;
        const allowed = ["image/jpg", "image/png", "image/jpeg"];
        const isAllowed = allowed.some((type) => type === format);
        return isAllowed;
    };
    const imageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);
        });
    };

    const removePhoto = () => setPhoto({ file: "", name: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setDisable(true);
            if (_.isEmpty(formData))
                return toast.error("Os campos não podem estar vazios");
            if (!_.isEmail(formData.email))
                return toast.error("Este email não é valido");
            setLoading(true);

            await userService.update({ ...formData });

            const FormDatas = new FormData();
            FormDatas.append('pic_profile', photo.raw);

            if (!!photo.raw){
                await userService.updatePicProfile(FormDatas)
            }

            toast.success("Atualizado com sucesso!");
            setDisable(false);
            navigate("/home", { replace: true });
        } catch (error) {
            setLoading(false);
            setDisable(false);

            if (error.response !== undefined)
                if (error.response.status === 406)
                    return toast.warning("E-mail não possui registro!");
            toast.error("Não foi possível atualizar no momento.");
        }
    };

    useEffect(() => {
        dataUser &&
            setFormData({
                name: dataUser.body.name,
                email: dataUser.body.email,
                nickname: dataUser.body.nickname,
                description: dataUser.body?.description,
                pic_profile: dataUser.body?.pic_profile
            });

    }, [dataUser]);
    return (
        <Profile.Container>
            <h3>Account Information</h3>
            <Profile.Form>
                <Profile.FileArea>
                    <Profile.ImageArea>
                        <img
                            src={!photo.file ? noAvatar : photo.file}

                            alt="avatar user"
                        />
                        <span onClick={() => removePhoto()}>
                            <img src={CloseIcon} alt="botão de fechar" />
                        </span>
                    </Profile.ImageArea>
                    <input
                        type="file"
                        id="file-input"
                        hidden
                        name="pic_profile"
                        onChange={(e) => ShowPreviewImage(e)}
                        disabled={disable}
                    />
                    <section>
                        <Button variant="outlined" color="primary">
                            <label htmlFor="file-input">Change photo</label>
                        </Button>
                        <p>
                            {!photo.name
                                ? "file name not provided"
                                : photo.name}
                        </p>
                    </section>
                </Profile.FileArea>
                <Profile.InputArea>
                    <Profile.Column>
                        <Form.Group>
                            <TextField
                                label="Name"
                                variant="outlined"
                                type="text"
                                name="name"
                                className="round"
                                onChange={formChange}
                                value={formData.name}
                                disabled={disable}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                type="text"
                                name="email"
                                className="round"
                                onChange={formChange}
                                value={formData.email}
                                disabled={disable}
                            />
                            <TextField
                                label="Nickname"
                                variant="outlined"
                                type="text"
                                name="nickname"
                                className="round"
                                onChange={formChange}
                                value={formData.nickname}
                                disabled={disable}
                            />
                        </Form.Group>
                    </Profile.Column>
                    <Profile.Column>
                        <Form.Group>
                            <TextField
                                id="filled-multiline-static"
                                label="Description"
                                multiline
                                variant="outlined"
                                name="description"
                                className="round"
                                onChange={formChange}
                                value={formData.description || ""}
                                disabled={disable}
                            />
                        </Form.Group>
                    </Profile.Column>
                </Profile.InputArea>
                <Profile.ButtonArea>
                    <LoadingButton
                        loading={loading}
                        loadingPosition="center"
                        onClick={handleSubmit}
                        disabled={disable}
                        variant="contained"
                        color="primary"
                        size="large"
                        disableElevation
                        type="submit"
                    >
                        Save changes
                    </LoadingButton>
                    {/*  <Buttons.Outline disabled={disable}>Apagar conta</Buttons.Outline> */}
                </Profile.ButtonArea>
            </Profile.Form>
        </Profile.Container>
    );
};

export default ProfileInfo;
