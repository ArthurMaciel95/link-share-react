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
import { social, payment, contact } from 'helpers/modal-links'
const Modal = ({ open, setOpen }) => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => setValue(newValue);
    const [view, SetView] = useState(1);
    const [linkName, SetLinkName] = useState("");
    const [tag, SetTag] = useState("social");
    const [formData, SetFormData] = useState({ type: "", context: "" });
    const [format, setFormat] = useState(null)
    const formChange = (event) =>
        SetFormData({ ...formData, [event.target.name]: event.target.value });
    const linkService = new LinksUrls();
    const handleClose = () => setOpen(false);
    function click(name, tagCategory, format) {
        SetTag(tagCategory);
        SetView(2);
        SetLinkName(name);
        setFormat(format)
    }

    function sendForm() {
        const { context } = formData;
        if (!context) return toast.error("Preencha todos os campos!")
        linkService
            .linkCreate(linkName, context, tag)
            .then((res) => {
                toast.success("Create with success!");
                SetView(1);
                setOpen(false);
            })
            .catch((e) => {
                if (e.response.status != undefined) {
                    toast.warning(e.response.data.message);
                } else {
                    toast.error(
                        "Unable to create the link at the moment, please try later."
                    );
                }
            });
    }

    function socialLinks() {
        return (
            <ModalSection>
                {social.map(({ name, logo, tags }) => <LinkArea
                    name={name}
                    logo={Logo[logo]}
                    handleClick={click}
                    tag={tags}
                ></LinkArea>
                )}
            </ModalSection>
        );
    }

    function PaymentLinks() {
        return (
            <ModalSection>
                {payment.map(({ name, logo, tags }) => <LinkArea
                    name={name}
                    logo={Logo[logo]}
                    handleClick={click}
                    tag={tags}
                ></LinkArea>
                )}
            </ModalSection>
        );
    }

    function ContactLinks() {
        return (
            <ModalSection>
                {contact.map(({ name, logo, tags }) => <LinkArea
                    name={name}
                    logo={Logo[logo]}
                    handleClick={click}
                    tag={tags}
                ></LinkArea>)}
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
                                <Box
                                    sx={{ width: "100%", typography: "body1" }}
                                >
                                    <TabContext value={value}>
                                        <Box
                                            sx={{
                                                borderBottom: 1,
                                                borderColor: "divider",
                                            }}
                                        >
                                            <TabList
                                                onChange={handleChange}
                                                aria-label="lab API tabs example"
                                            >
                                                <Tab label="Social" value="1" />
                                                <Tab
                                                    label="Payment"
                                                    value="2"
                                                />
                                                <Tab
                                                    label="Contact"
                                                    value="3"
                                                />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            {socialLinks()}
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
                            format={format}
                        />
                    )}
                </>
            ) : null}
        </>
    );
};

export default Modal;
