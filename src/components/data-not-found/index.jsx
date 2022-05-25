import React from "react";
import { NoData, Paragraph, HeaderText, ButtonAddLink } from "./styles";
import { useTranslation } from "react-i18next";
const DataNotFound = ({ isVisitor }) => {
    let { t, i18n } = useTranslation()
    return (
        <NoData>
            <HeaderText>{t('not_found_link.link_not_found')}</HeaderText>
            <Paragraph>
                {isVisitor ? t('not_found_link.no_add_link') : t('not_found_link.your_probably')}
            </Paragraph>
        </NoData>
    );
};

export default DataNotFound;
