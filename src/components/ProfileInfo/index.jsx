import React, { useState } from 'react'
import * as Profile from './styles'
import * as Form from '../Form'
import * as Buttons from '../Buttons'
import noAvatar from '../../assets/images/avatar.jpeg'
import { toast } from "react-toastify";
import { userEndpoint } from "../../services/api/user";
import { useNavigate } from "react-router-dom";
import { encoded, decoded } from '../../utils/buffer'
import { Validation } from "../../utils/validation";

const ProfileInfo = () => {
    const _ = new Validation()

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState()
    const [photo, setPhoto] = useState({ file: '', name: '' })
    const [formData, setFormData] = useState({ name: '', email: '', nickname: '', description: '', photo, });
    const MAX_SIZE_IMAGE = 100000;

    const ToastyOptions = {
        theme: 'light',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: true,
    }

    function formChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const uploadImage = async (e) => {
        let file = e.target.files[0];
        console.log(file)
        if (!isFormatAllowed(file)) return toast.error('Formato de image não permitido');
        if (!isSizeAllowed(file)) return toast.error(`O tamanho da imagem não pode passar de ${MAX_SIZE_IMAGE / 1000}kb`);
        const base64 = await imageToBase64(file);
        console.log('foto adicionada!')
        setPhoto({ file: base64, name: file.name })
    }
    const isSizeAllowed = (file) => file.size < MAX_SIZE_IMAGE;

    const isFormatAllowed = (file) => {

        const format = file.type;
        const allowed = ['image/jpg', 'image/png', 'image/jpeg']
        const isAllowed = allowed.some(type => type === format)
        return isAllowed;
    }
    const imageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = (() => {
                resolve(fileReader.result)
            })
            fileReader.onerror = (error => {
                reject(error)
            })
        })
    }

    const removePhoto = () => {
        setPhoto({ file: '', name: '' })
    }


    const base64decoded = (image) => {
        return decoded(image, 'utf-8')
    }
    const deleteClient = async () => {
        /*  setLoading(true)
         const result = await client.delete(id)
         setLoading(false)
         if (!result) {
             return toast.warning("Messagem de error");
         }
         if (result && !result.status) {
             return toast.warning("Messagem de error");
         }
         const data = await result.json();
 
         if (data.status) {
             history.push('/dashboard')
         }
         console.log(data) */
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            if (_.isEmpty(formData))
                return toast.error("Os campos não podem estar vazios");
            if (!_.isEmail(formData.email))
                return toast.error("Este email não é valido");


            setLoading(true)
            const response = await userEndpoint.update({ ...formData });




        } catch (error) {
            setLoading(false)
            if (error.response != undefined)
                if (error.response.status == 406)
                    return toast.warning("E-mail não possui registro!");

            toast.error("Servidor indisponível no momento.");
        }
    }


    return (
        <Profile.Container>
            <h3>Informação da conta</h3>
            <Profile.Form>
                <Profile.FileArea>
                    <Profile.ImageArea>
                        <img src={!photo.file ? noAvatar : photo.file} alt="foto de perfil do usuário" />
                        <span onClick={() => removePhoto()}>X</span>
                    </Profile.ImageArea>
                    <input type="file" id="file-input" hidden name="photo" onChange={(e) => { uploadImage(e) }} />
                    <section>
                        <Buttons.Outline>
                            <label htmlFor="file-input">
                                Trocar foto
                            </label>
                        </Buttons.Outline>
                        <p>{!photo.name ? 'Nome de arquivo não informado  ' : photo.name}</p>

                    </section>


                </Profile.FileArea>
                <Profile.InputArea>

                    <Profile.Column>
                        <Form.Group>
                            <input type="text" name="name" className="round" placeholder='Nome' onChange={formChange} />
                            <input type="text" name="email" className="round" placeholder='Email' onChange={formChange} />
                            <input type="text" name="nickname" className="round" placeholder='Apelido' onChange={formChange} />
                        </Form.Group>
                    </Profile.Column>
                    <Profile.Column>
                        <Form.Group>
                            <textarea name="description" className="round" placeholder='Descrição' onChange={formChange}></textarea>
                        </Form.Group>
                    </Profile.Column>
                </Profile.InputArea>
                <Profile.ButtonArea>
                    <Buttons.Primary onClick={handleSubmit}>
                        Salvar alterações
                    </Buttons.Primary>
                    <Buttons.Outline>
                        Apagar conta
                    </Buttons.Outline>

                </Profile.ButtonArea>
            </Profile.Form>
        </Profile.Container>
    )
}

export default ProfileInfo
