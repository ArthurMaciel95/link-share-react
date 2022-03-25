import React from 'react'
import {ModalNewLinkOverlay, ModalNewLink} from './styles'
import * as Form from "components/Form"
import * as Buttons from 'components/Buttons'
import ArrowLeftIcon from 'assets/images/icon_arrow_left.png'

const ModalNewLInk = ({formChange,sendForm,name, SetView}) => {
    return (
        <ModalNewLinkOverlay>
            <ModalNewLink className='form-area col-6 offset-md-3  shadow p-5 position-relative'>
            <Form.Container>
            <img src={ArrowLeftIcon} alt="seta para esquerda" style={{ height: '60px', width: '60px' }} className='p-2  position-absolute top-0 ' onClick={()=> SetView(1)} />
                    <h3>Link detail</h3> 
            <Form.Group>
            <label>Url Profile of {name}:</label>
            <input type="text" id='nickname' name='url' placeholder='Ex: https://www.facebook.com/profile/user123'  onChange={formChange}/>
          </Form.Group>
          <Form.Row className="end">
              <Buttons.Primary  onClick={sendForm}>Create Link</Buttons.Primary>
                        
        </Form.Row>
                </Form.Container>
            </ModalNewLink>
        </ModalNewLinkOverlay>
    )
}

export default ModalNewLInk;