import React from "react";
import BleetContainer from "./BleetContainer";

const ContentContainer = () => {
    //get the bleets
    return (
        <div className="content">
            {/* Loop through bleets */}
            <BleetContainer />
            <BleetContainer />
            <BleetContainer />
        </div>
    );
};

export default ContentContainer;