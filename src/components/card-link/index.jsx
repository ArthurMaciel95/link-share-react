import React, { useState, useEffect } from "react";
import { Card } from "./styles.js";
import threeDots from "../../assets/svg/three-dots.svg";
import ModalCardSettings from "components/modal-card-settings";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

import { useAppContext } from "context/AppContext";
const CardLink = ({ name, image, link, createAt, id, visitor, Key }) => {
    const { removeLink } = useAppContext();
    const [open, setOpen] = useState(false);
    let anchor = "right";
    const handlerRemoveLink = () => removeLink(id);
    const handlerClipBoard = () => {
        navigator.clipboard.writeText(link);
        toast.success("link successfully copied!");
    };
    const toggleDrawer = (open) => (e) => {
        if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
        setOpen(open);
    };

    const list = () => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                padding: 2,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    {
                        text: "Delete URL",
                        icon: <DeleteIcon />,
                        action: handlerRemoveLink,
                    },
                    {
                        text: "Copy Link",
                        icon: <ContentCopyIcon />,
                        action: handlerClipBoard,
                    },
                ].map(({ text, icon, action }, index) => (
                    <ListItem button key={text} onClick={action}>
                        <ListItemIcon>{icon}</ListItemIcon>
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
                {!visitor && (
                    <>
                        <img
                            src={threeDots}
                            alt="icon settings"
                            className="btn-settings"
                            onClick={toggleDrawer(true)}
                        />
                        <Drawer
                            anchor={anchor}
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            {list()}
                        </Drawer>
                    </>
                )}
            </div>
        </Card>
    );
};

export default CardLink;
