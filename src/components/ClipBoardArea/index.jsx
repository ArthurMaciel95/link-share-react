import react from 'react';
import { ClipBoardAreaStyle } from './styles';
import ClipBoardIcon from 'assets/svg/clip-board.svg'
import { toast } from 'react-toastify';
const ClipBoardArea = ({ nickname }) => {


    const urlVisitor = `https://www.linkshare.com.br/visitor/${nickname}`

    const handlerClipBoard = () => {
        const copyUrl = navigator.clipboard.writeText(urlVisitor)

        return toast.success('link successfully copied!')
    }
    return (
        <>
            <ClipBoardAreaStyle>

                <p>
                    {urlVisitor}
                </p>
                <span className='icon-area' onClick={(e) => handlerClipBoard(e)}>
                    <img src={ClipBoardIcon} alt="clipboard icon" />
                </span>

            </ClipBoardAreaStyle>
        </>
    )
}


export default ClipBoardArea;