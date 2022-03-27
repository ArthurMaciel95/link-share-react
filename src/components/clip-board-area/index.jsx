import react from 'react';
import { ClipBoardAreaStyle } from './styles';
import ClipBoardIcon from 'assets/svg/clip-board.svg'
import { toast } from 'react-toastify';
import Button from '@mui/material/Button'
const ClipBoardArea = ({ nickname }) => {


    const urlVisitor = `https://www.linkshare.com.br/visitor/${nickname}`

    const handlerClipBoard = () => {
        const copyUrl = navigator.clipboard.writeText(urlVisitor)

        return toast.success('link successfully copied!')
    }
    return (
        <>

            <ClipBoardAreaStyle>
                <Button onClick={(e) => handlerClipBoard(e)} variant="outlined" className="btn" color="primary" size="large" disableElevation>
                    <p>Copy my profile</p>
                    <img src={ClipBoardIcon} alt="clipboard icon" />
                </Button>
            </ClipBoardAreaStyle>
        </>
    )
}


export default ClipBoardArea;