import react, { useContext, useState } from "react";
import { ClipBoardAreaStyle } from "./styles";
import ClipBoardIcon from "assets/svg/clip-board.svg";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from "@mui/material/Tooltip";
import { AppContext } from "context";
import { useTranslation } from "react-i18next";
const ClipBoardArea = ({ nickname }) => {
    let { t, i18n } = useTranslation()
    const { fields } = useContext(AppContext)
    const urlVisitor = `https://www.linkshare.com.br/v/${nickname}`;
    const [copied, setCopied] = useState(false)
    const handlerClipBoard = () => toast.success("link successfully copied!");
    const onCopy = () => setCopied(true)
    return (
        <>
            <Tooltip title={t('home.tooltip.send_the_url_with_your_followers')} disableHoverListener={fields} arrow>
                <ClipBoardAreaStyle>
                    <CopyToClipboard onCopy={onCopy} text={urlVisitor}>
                        <Button
                            onClick={handlerClipBoard}
                            variant="outlined"
                            className="btn"
                            color="primary"
                            size="large"
                            disabled={fields}
                            disableElevation
                        >
                            <p>{t('home.buttons.copy_url')}</p>
                            <img src={ClipBoardIcon} alt="clipboard icon" />
                        </Button>
                    </CopyToClipboard>
                </ClipBoardAreaStyle>
            </Tooltip>
        </>
    );
};

export default ClipBoardArea;
