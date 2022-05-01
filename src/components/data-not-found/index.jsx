import React from "react";
import { NoData, Paragraph, HeaderText, ButtonAddLink } from "./styles";

const DataNotFound = () => {
    return (
        <NoData>
            <HeaderText>Nenhum link encontrado.</HeaderText>
            <Paragraph>
                Provavelmente você não adicionou nenhum link para está seção.
            </Paragraph>
        </NoData>
    );
};

export default DataNotFound;
