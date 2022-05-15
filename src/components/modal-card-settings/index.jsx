import React, { useState, useEffect } from "react";
import { ModalCardSettingsStyle } from "components/modal-card-settings/styles";
import TrashIcon from "assets/svg/lixeira.svg";
import Modal from "components/modal";
import CopyLinkIcon from "assets/svg/copy-link.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "context/AppContext";

const ModalCardSettings = ({ id, link, visitor }) => {
    const { removeLink } = useAppContext();
    return (
        <ModalCardSettingsStyle>
            {!visitor && (
                <p onClick={() => removeLink(id)}>
                    <img
                        src={TrashIcon}
                        alt="icon trash"
                        className="trash-icon"
                        onClick={() => removeLink(id)}
                    />
                    Remove
                </p>
            )}
            <p onClick={(e) => handlerClipBoard(e)}>
                <img
                    src={CopyLinkIcon}
                    alt="copy link"
                    className="trash-icon"
                />
                Copy Link
            </p>
        </ModalCardSettingsStyle>
    );
};

export default ModalCardSettings;
