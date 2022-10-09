import React from "react";
import Bleeter from "../img/bleeter.svg";
import Sheep from "../img/sheep.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-tag">
                <img src={Bleeter} alt="Logo of sheep" />
                <h3>Life suddenly got quick!</h3>
            </div>
            <img id="sheep" src={Sheep} alt="sheep eating grass" />
        </div>
    );
}

export default Header