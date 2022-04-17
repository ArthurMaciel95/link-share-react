import React, { useState } from "react";
import { Card } from "./styles.js";
import threeDots from "../../assets/svg/three-dots.svg";
import ModalCardSettings from "components/modal-card-settings";
import { toast } from "react-toastify";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { LinksUrls } from "services/api/link";

const CardLink = ({
    name,
    image,
    link,
    createAt,
    id,
    visitor,
    Key,
}) => {
    const [open, setOpen] = useState(false);

    let anchor = 'right'
    const navigate = new useNavigate();
    const linkService = new LinksUrls();

    const handlerRemoveLink = async (e) => {
        try {
            const result = await linkService.unregister(id);
            toast.success("link deleted successfully!");
        } catch (err) {
            toast.error("error trying to delete link");

            console.log(err);
        }
    };


    const handlerClipBoard = () => {
        navigator.clipboard.writeText(link);
        toast.success("link successfully copied!");
    };
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open)
    };

    const list = () => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[{ text: 'Delete URL', icon: <DeleteIcon />, action: handlerRemoveLink }, { text: 'Copy Link', icon: <ContentCopyIcon />, action: handlerClipBoard }].map(({ text, icon, action }, index) => (
                    <ListItem button key={text} onClick={action}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>


                ))}
            </List>
        </Box>
    );

    return (
        <Card key={Key}>
            <img
                src={image}
                alt={` logo`}
                className="obj-fit m-2"
                style={{ height: "45px", objectFit: "contain" }}
            />
            <div className="body-card d-flex flex-column mx-4">
                <h3 className="text-dark fs-4">{name}</h3>
                <a href={`${link}`} target="_blank" className="text-black-50">
                    {link}
                </a>
            </div>
            <div className="card-settings">
                <p className="create-at">{createAt}</p>
                <img
                    src={threeDots}
                    alt="icon settings"
                    className="btn-settings"
                    onClick={toggleDrawer(true)}
                />
                {/*     {openModalSettings && (
                    <ModalCardSettings
                        id={id}
                        link={link}
                        visitor={visitor}
                        handlerRemoveLink={handlerRemoveLink}
                    />
                )} */}



                < Drawer
                    anchor={anchor}
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>


            </div>
        </Card>
    );
};

export default CardLink;
