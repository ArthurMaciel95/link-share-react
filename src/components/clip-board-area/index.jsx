import react from "react";
import { ClipBoardAreaStyle } from "./styles";
import ClipBoardIcon from "assets/svg/clip-board.svg";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
const ClipBoardArea = ({ nickname }) => {
    const urlVisitor = `https://www.linkshare.com.br/v/${nickname}`;

    const handlerClipBoard = () => {
        const copyUrl = navigator.clipboard.writeText(urlVisitor);
        return toast.success("link successfully copied!");
    };
    return (
        <>
            <Tooltip title="Send the Url to your followers" arrow>
                <ClipBoardAreaStyle>
                    <Button
                        onClick={(e) => handlerClipBoard(e)}
                        variant="outlined"
                        className="btn"
                        color="primary"
                        size="large"
                        disableElevation
                    >
                        <p>Copy URL</p>
                        <img src={ClipBoardIcon} alt="clipboard icon" />
                    </Button>
                </ClipBoardAreaStyle>
            </Tooltip>
        </>
    );
};

export default ClipBoardArea;
