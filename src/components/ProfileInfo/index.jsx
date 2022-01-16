import React from 'react'
import * as Profile from './styles'
import * as Form from '../Form'
import * as Buttons from '../Buttons'

const ProfileInfo = () => {
    return (
        <Profile.Container>
            <h3>Informação da conta</h3>
            <Profile.InputArea>
                <Profile.Column>
                    <Form.Group>
                        <input type="text" name="name" className="round" placeholder='Nome' />
                        <input type="text" name="email" className="round" placeholder='Email' />
                        <input type="text" name="nickname" className="round" placeholder='Apelido' />
                    </Form.Group>
                </Profile.Column>
                <Profile.Column>
                    <Form.Group>
                        <textarea name="description" className="round" placeholder='Descrição'></textarea>
                    </Form.Group>
                </Profile.Column>
            </Profile.InputArea>
            <Profile.ButtonArea>
                <Buttons.Primary>
                    Salvar alterações
                </Buttons.Primary>
                <Buttons.Outline>
                    Apagar conta
                </Buttons.Outline>

            </Profile.ButtonArea>
        </Profile.Container>
    )
}

export default ProfileInfo
