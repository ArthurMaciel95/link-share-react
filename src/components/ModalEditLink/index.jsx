import React from 'react'
import {ModalNewLinkStyle} from './styles'
import * as Form from "components/Form"
import * as Buttons from 'components/Buttons'

const ModalNewLInk = ({formChange,sendForm,name}) => {
    return (
        <ModalNewLinkStyle>
            <div className='form-area col-6 offset-md-3  shadow p-5 position-relative'>
                <Form.Container>
                    <h3>Detalhes do link</h3> 
            <Form.Group>
            <label>Url do Perfil do {name}:</label>
            <input type="text" id='nickname' name='url' onChange={formChange}/>
          </Form.Group>
          <Form.Row className="end">
              <Buttons.Primary  onClick={sendForm}>Criar Link</Buttons.Primary>
                        
        </Form.Row>
                </Form.Container>
            </div>
        </ModalNewLinkStyle>
    )
}

export default ModalNewLInk;