import React from "react";
import Avatar from "../img/avatar.svg";

const BleetContainer = () => {

    const newBleet = {
        username: "James",
        comment: "Hello World"
    };
    
    return (
        <div className="bleet-wrapper">
            <div className="avatar">
                <img src={Avatar} alt="User"></img>
            </div>
            <div className="bleet">
                <p>{newBleet.username}</p>
                <p>{newBleet.comment}</p>
            </div>
        </div>
    );
};

export default BleetContainer;