import React, { useEffect, useState } from "react";
import * as Profile from "./styles";
import * as Form from "components/form";
import * as Buttons from "components/buttons";
import noAvatar from "assets/images/avatar.jpeg";
import CloseIcon from "assets/svg/close.svg";
import { toast } from "react-toastify";
import { encoded, decoded } from "utils/buffer";
import { TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button'
import { useAppContext } from "context/AppContext";
import { useTranslation } from "react-i18next";
const ProfileInfo = ({ dataUser }) => {
    let { t, i18n } = useTranslation()
    const { updateProfile, fields, loading, toggleFields } = useAppContext();
    const [photo, setPhoto] = useState({ base64: "", name: "", file: "" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        nickname: "",
        description: "",
        photo,
    });
    const MAX_SIZE_IMAGE = 2000000;
    const formChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const ShowPreviewImage = async (e) => {
        let file = e.target.files[0];
        if (!isFormatAllowed(file)) return toast.error(t('toast_message.errors.format_not_allowed'));
        if (!isSizeAllowed(file)) return toast.error(t('toast_message.errors.format_not_allowed'));
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
        const photoData = new FormData();
        photoData.append("pic_profile", photo.raw);
        await updateProfile(formData, photoData);
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
            <h3>{t('')}</h3>
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
                        disabled={fields}
                        onChange={(e) => ShowPreviewImage(e)}
                    />
                    <section>
                        <Button variant="outlined" color="primary" disabled={fields}>
                            <label htmlFor="file-input">{t('profile.change_photo')}</label>
                        </Button>
                        <p>
                            {!photo.name
                                ? t('profile.file_name_not_provided')
                                : photo.name}
                        </p>
                    </section>
                </Profile.FileArea>
                <Profile.InputArea>
                    <Profile.Column>
                        <Form.Group>
                            <TextField
                                label={t('profile.name')}
                                variant="outlined"
                                type="text"
                                name="name"
                                className="round"
                                onChange={formChange}
                                disabled={fields}
                                value={formData.name}
                            />
                            <TextField
                                label={t('profile.email')}
                                variant="outlined"
                                type="text"
                                name="email"
                                className="round"
                                onChange={formChange}
                                disabled={fields}
                                value={formData.email}
                            />
                            <TextField
                                label={t('profile.nickname')}
                                variant="outlined"
                                type="text"
                                name="nickname"
                                className="round"
                                onChange={formChange}
                                disabled={fields}
                                value={formData.nickname}
                            />
                        </Form.Group>
                    </Profile.Column>
                    <Profile.Column>
                        <Form.Group>
                            <TextField
                                id="filled-multiline-static"
                                label={t('profile.description')}
                                rows={7}
                                variant="outlined"
                                name="description"
                                multiline={true}
                                onChange={formChange}
                                disabled={fields}
                                value={formData.description || ""}
                                sx={{ height: "100%" }}
                            />
                        </Form.Group>
                    </Profile.Column>
                </Profile.InputArea>
                <Profile.ButtonArea>
                    <LoadingButton
                        loading={loading}
                        loadingPosition="center"
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        disableElevation
                        type="submit"
                        disabled={fields}
                    >
                        {t('profile.buttons.save_changes')}
                    </LoadingButton>
                    {/*  <Buttons.Outline disabled={disable}>Apagar conta</Buttons.Outline> */}
                </Profile.ButtonArea>
            </Profile.Form>
        </Profile.Container>
    );
};

export default ProfileInfo;
