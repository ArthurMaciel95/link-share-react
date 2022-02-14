import React from 'react'
import {ModalCardSettings} from 'components/ModalCardSettings/styles'
import TrashIcon from 'assets/svg/lixeira.svg'

import CopyLinkIcon from 'assets/svg/copy-link.svg'
const index = ({handlerClipBoard}) => {
  return (
    <ModalCardSettings>
        <p><img src={TrashIcon} alt="lixeira" className='trash-icon'/> Remover</p>
        <p><img src={CopyLinkIcon} alt="copiar link" className='trash-icon' onClick={handlerClipBoard}/> Copiar Link</p>
    </ModalCardSettings>
  )
}

export default index