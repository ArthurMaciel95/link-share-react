import React from 'react'
import { NoData, Paragraph, HeaderText, ButtonAddLink } from './styles'

const DataNotFound = () => {
    return (
        <NoData>
            <HeaderText>Nenhum link encontrado.</HeaderText>
            <Paragraph>Provavelmente você não adicionou nenhum link a sua conta,
                basta clicar no botão abaixo para criar um novo link.</Paragraph>
            <ButtonAddLink>Adicionar link</ButtonAddLink>
        </NoData>
    )
}

export default DataNotFound
