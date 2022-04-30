import React, { Children, useState } from "react";
import Logo from "utils/links-logos";
import ArrowLeftIcon from "assets/images/icon_arrow_left.png";
import LinkArea from "components/link-area";
import { ModalOverlay, ModalArea, ModalSection } from "./styles";
import { LinksUrls } from "services/api/link";
import ModalNewLInk from "components/modal-edit-link";
import { toast } from "react-toastify";
import ModalMaterial from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Modal = ({ open, setOpen }) => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => setValue(newValue);
    const [view, SetView] = useState(1);
    const [linkName, SetLinkName] = useState("");
    const [formData, SetFormData] = useState({ type: "", url: "" });
    const formChange = (event) =>
        SetFormData({ ...formData, [event.target.name]: event.target.value });
    const linkService = new LinksUrls();
    const handleClose = () => setOpen(false);
    function click(name) {
        SetView(2);
        SetLinkName(name);
    }

    function sendForm() {
        const { url } = formData;
        if (!url) return toast.error("Preencha todos os campos!");
        linkService
            .linkCreate(linkName, url)
            .then((res) => {
                toast.success("Create with success!");
                SetView(1);
                setOpen(false);
            })
            .catch((e) => {
                if (e.response.status != undefined) {
                    toast.warning(e.response.data.message);
                } else {
                    toast.error("Unable to create the link at the moment, please try later.");
                }
            });
    }

    function popularLinks() {
        return (
            <ModalSection>
                <LinkArea
                    name="Custom link"
                    logo={Logo.customlink}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Facebook"
                    logo={Logo.facebook}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Instagram"
                    logo={Logo.instagram}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Linkdin"
                    logo={Logo.linkdin}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Twitter"
                    logo={Logo.twitter}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Snapchat"
                    logo={Logo.snapchat}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Vimeo"
                    logo={Logo.vimeo}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Pinterest"
                    logo={Logo.pinterest}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="TikTok"
                    logo={Logo.tiktok}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Youtube"
                    logo={Logo.youtube}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="SoundCloud"
                    logo={Logo.soundcloud}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Twitch"
                    logo={Logo.twitch}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Drop Box"
                    logo={Logo.dropbox}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="OnlyFans"
                    logo={Logo.onlyfans}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Discord"
                    logo={Logo.discord}
                    handleClick={click}
                ></LinkArea>
            </ModalSection>
        );
    }

    function PaymentLinks() {
        return (
            <ModalSection>
                <LinkArea
                    name="Pix"
                    logo={Logo.pix}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Neteller"
                    logo={Logo.neteller}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Skrill"
                    logo={Logo.skrill}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="PayPal"
                    logo={Logo.paypal}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="99Pay"
                    logo={Logo.nineninepay}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Ame Digital"
                    logo={Logo.amedigital}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Bitz"
                    logo={Logo.bitz}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="GooglePay"
                    logo={Logo.googlepay}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Mercado Pago"
                    logo={Logo.mercadopago}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="PayPal"
                    logo={Logo.paypal}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="PicPay"
                    logo={Logo.picpay}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="PagBank"
                    logo={Logo.pagbank}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="ItiBank"
                    logo={Logo.itibank}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="BanQi"
                    logo={Logo.banqi}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="BuyMeACoffe"
                    logo={Logo.buymeacoffe}
                    handleClick={click}
                ></LinkArea>
            </ModalSection>
        );
    }

    function ContactLinks() {
        return (
            <ModalSection>
                <LinkArea
                    name="WhatsApp"
                    logo={Logo.whatsapp}
                    handleClick={click}
                ></LinkArea>
                <LinkArea
                    name="Telegram"
                    logo={Logo.telegram}
                    handleClick={click}
                ></LinkArea>
            </ModalSection>
        );
    }

    return (
        <>
            {open ? (
                <>
                    {view == 1 ? (
                        <ModalMaterial
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                        >
                            <ModalArea>
                                <Box sx={{ width: "100%", typography: "body1" }} >
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                                <Tab label="Popular" value="1" />
                                                <Tab label="Payment" value="2" />
                                                <Tab label="Contact" value="3" />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            {popularLinks()}
                                        </TabPanel>
                                        <TabPanel value="2">
                                            {PaymentLinks()}
                                        </TabPanel>
                                        <TabPanel value="3">
                                            {ContactLinks()}
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </ModalArea>
                        </ModalMaterial>
                    ) : (
                        <ModalNewLInk
                            formChange={formChange}
                            sendForm={sendForm}
                            name={linkName}
                            SetView={SetView}
                        />
                    )}
                </>
            ) : null}
        </>
    );
};

export default Modal;
