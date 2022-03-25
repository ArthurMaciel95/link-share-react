import React, { Children,useState } from 'react'
import Logo from 'utils/links-logos'
import ArrowLeftIcon from 'assets/images/icon_arrow_left.png'
import LinkArea from 'components/LinkArea'
import { ModalOverlay, ModalArea } from './styles'
import { LinksUrls } from 'services/api/link'
import ModalNewLInk from 'components/ModalEditLink'
import { toast } from "react-toastify";
const Modal = ({ showModal, setShowModal }) => {
    const [view, SetView] = useState(1);
    const [linkName, SetLinkName] = useState("");

    const [formData, SetFormData ] = useState({type:"",url:""});
    const formChange = (event) => SetFormData({ ...formData, [event.target.name]: event.target.value })
    const linkService = new LinksUrls();
    
    function click(name) {
        SetView(2);
        SetLinkName(name);
    }

    function sendForm() {
        const { url } = formData
        if (!url) return toast.error("Prencha todos os campos!");
        linkService.linkCreate(linkName,url).then((res)=>{
            toast.success("Criado com sucesso!");
            SetView(1);
            setShowModal(false);
        
        }).catch((e) => {
            if (e.response.status != undefined)
                console.log(e.response.data)
            else
                toast.error("Não foi possível criar no momento!");
        })
    }

    return (
        <> {showModal ? <>
            {view == 1 ? <ModalOverlay>
                <ModalArea>
                    <img src={ArrowLeftIcon} alt="seta para esquerda" style={{ height: '60px', width: '60px', cursor:'pointer'}} className='p-2  position-absolute top-0 ' onClick={()=> setShowModal(!showModal)} />
                 
                    <LinkArea name="Custom link" logo={Logo.customlink} handleClick={click}></LinkArea>
                        <LinkArea name="Facebook" logo={Logo.facebook} handleClick={click}></LinkArea>
                        <LinkArea name="Instagram" logo={Logo.instagram} handleClick={click}></LinkArea>
                        
                        <LinkArea name="Linkdin" logo={Logo.linkdin} handleClick={click}></LinkArea>
                  
                        <LinkArea name="Twitter" logo={Logo.twitter} handleClick={click}></LinkArea>
                        <LinkArea name="Snapchat" logo={Logo.snapchat} handleClick={click}></LinkArea>
                        <LinkArea name="Vimeo" logo={Logo.vimeo} handleClick={click}></LinkArea>
                        <LinkArea name="Pinterest" logo={Logo.pinterest} handleClick={click}></LinkArea>
               
                        <LinkArea name="Telegram" logo={Logo.telegram} handleClick={click}></LinkArea>
                        <LinkArea name="TikTok" logo={Logo.tiktok} handleClick={click}></LinkArea>
                        <LinkArea name="Youtube" logo={Logo.youtube} handleClick={click}></LinkArea>
                        <LinkArea name="SoundCloud" logo={Logo.soundcloud} handleClick={click}></LinkArea>
                  
                  
                        <LinkArea name="Twitch" logo={Logo.twitch} handleClick={click}></LinkArea>
                        <LinkArea name="Dropbox" logo={Logo.dropbox} handleClick={click}></LinkArea>
                        <LinkArea name="OnlyFans" logo={Logo.onlyfans} handleClick={click}></LinkArea>

                        <LinkArea name="Discord" logo={Logo.discord} handleClick={click}></LinkArea>
                   
                </ModalArea >
            </ModalOverlay> : <ModalNewLInk formChange={formChange} sendForm={sendForm} name={linkName} SetView={SetView} />
            }
            </>: null}</>
    )
}

export default Modal
