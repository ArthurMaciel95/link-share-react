import { TagsContainer, Tag } from "./styles";

export const TagsNavigation = ({ tags, setFilter, filter }) => {
    return (
        <TagsContainer>
            {tags &&
                tags.map((tag, pos) => (
                    <Tag
                        key={pos}
                        className={filter == tag ? "selected" : ""}
                        onClick={() => setFilter(tag)}
                    >
                        {tag}
                    </Tag>
                ))}
        </TagsContainer>
    );
};
