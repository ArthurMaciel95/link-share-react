import { TagsContainer, Tag } from "./styles";
import { useTranslation } from "react-i18next";

export const TagsNavigation = ({ setFilter, filter }) => {
    const categorys = ['all', "social", "payment", "contact"]
    let { t } = useTranslation()
    return (
        <TagsContainer>
            {<>
                <Tag
                    key={'1'}
                    className={filter == 'all' ? "selected" : ""}
                    onClick={() => setFilter('all')}
                >
                    {t('tabs.all')}
                </Tag>
                <Tag
                    key={'2'}
                    className={filter == 'social' ? "selected" : ""}
                    onClick={() => setFilter('social')}
                >
                    {t('tabs.social')}
                </Tag>
                <Tag
                    key={'3'}
                    className={filter == 'payment' ? "selected" : ""}
                    onClick={() => setFilter('payment')}
                >
                    {t('tabs.payment')}
                </Tag>
                <Tag
                    key={'4'}
                    className={filter == 'contact' ? "selected" : ""}
                    onClick={() => setFilter('contact')}
                >
                    {t('tabs.contact')}
                </Tag></>

            }
        </TagsContainer >
    );
};
