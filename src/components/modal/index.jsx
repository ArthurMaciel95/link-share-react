import React, { Children, useContext, useState } from "react";
import Logo from "utils/links-logos";
import ArrowLeftIcon from "assets/images/icon_arrow_left.png";
import LinkArea from "components/link-area";
import { ModalOverlay, ModalArea, ModalSection } from "./styles";
import ModalNewLInk from "components/modal-edit-link";
import { toast } from "react-toastify";
import ModalMaterial from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AppContext } from "context";
import { social, payment, contact } from 'helpers/modal-links';
import { useTranslation } from "react-i18next";
const Modal = ({ open, setOpen }) => {
    let { t, i18n } = useTranslation()
    const { addLink, toggleModal, showModal } = useContext(AppContext);
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => setValue(newValue);
    const [view, SetView] = useState(1);
    const [linkName, SetLinkName] = useState("");
    const [tag, SetTag] = useState("social");
    const [formData, SetFormData] = useState({ type: "", context: "" });
    const formChange = (e) => SetFormData({ ...formData, [e.target.name]: e.target.value });
    const handleClose = () => toggleModal(false);
    function click(name, tagCategory) {
        SetTag(tagCategory);
        SetView(2);
        SetLinkName(name);
    }

    function sendForm() {

        addLink({ type: linkName, context: formData.context, tag: tag });
        SetView(1);
        toggleModal(false);
    }

    function socialLinks() {
        return (
            <ModalSection>
                {social.map(({ name, logo, tag }) => <LinkArea
                    key={name}
                    name={name}
                    logo={Logo[logo]}
                    handleClick={click}
                    tag={tag}
                ></LinkArea>
                )}
            </ModalSection>
        );
    }

    function PaymentLinks() {
        return (
            <ModalSection>
                {payment.map(({ name, logo, tag }) => <LinkArea
                    key={name}
                    name={name}
                    logo={Logo[logo]}
                    handleClick={click}
                    tag={tag}
                ></LinkArea>
                )}
            </ModalSection>
        );
    }

    function ContactLinks() {
        return (
            <ModalSection>
                {contact.map(({ name, logo, tag }) => <LinkArea
                    key={name}
                    name={name}
                    logo={Logo[logo]}
                    handleClick={click}
                    tag={tag}
                ></LinkArea>)}
            </ModalSection>
        );
    }

    return (
        <>
            {showModal ? (
                <>
                    {view == 1 ? (
                        <ModalMaterial
                            open={showModal}
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
                                                aria-label="Tab list"
                                            >
                                                <Tab label={t('modal.social')} value="1" />
                                                <Tab
                                                    label={t('modal.payment')}
                                                    value="2"
                                                />
                                                <Tab
                                                    label={t('modal.contact')}
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
                        />
                    )}
                </>
            ) : null}
        </>
    );
};

export default Modal;
