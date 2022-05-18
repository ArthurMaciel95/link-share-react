import React from "react";
import { NoData, Paragraph, HeaderText, ButtonAddLink } from "./styles";

const DataNotFound = ({ isVisitor }) => {
    return (
        <NoData>
            <HeaderText>Link not Found.</HeaderText>
            <Paragraph>
                {isVisitor ? "Profile owner has not added a link to this section" : "You probably haven't added any links to this section."}
            </Paragraph>
        </NoData>
    );
};

export default DataNotFound;
