import react, { useState } from "react";
import { ClipBoardAreaStyle } from "./styles";
import ClipBoardIcon from "assets/svg/clip-board.svg";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from "@mui/material/Tooltip";
const ClipBoardArea = ({ nickname,disabled }) => {
    const urlVisitor = `https://www.linkshare.com.br/v/${nickname}`;
    const [copied, setCopied] = useState(false)

    const handlerClipBoard = () => {

        toast.success("link successfully copied!");

    };

    const onCopy = () => setCopied(true)
    return (
        <>
            <Tooltip title="Send the Url to your followers" arrow>
                <ClipBoardAreaStyle>
                    <CopyToClipboard onCopy={onCopy} text={urlVisitor}>
                        <Button
                            onClick={handlerClipBoard}
                            variant="outlined"
                            className="btn"
                            color="primary"
                            size="large"
                            disabled={disabled}
                            disableElevation
                        >
                            <p>Copy URL</p>
                            <img src={ClipBoardIcon} alt="clipboard icon" />
                        </Button>
                    </CopyToClipboard>



                </ClipBoardAreaStyle>
            </Tooltip>
        </>
    );
};

export default ClipBoardArea;
