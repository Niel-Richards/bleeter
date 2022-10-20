import React from "react";
import { Link } from "react-router-dom";

const Middle = () => {
    return (
        <>
        {/* TODO - Move the form to create new bleets to the top of the home page */}
            {/* <form className="bleet-form">
                <input className="bleet-input" placeholder="What is on your mind?" />
                <button className="btn" type="submit">Bleet</button> 
            </form> */}
            <div className="middle">
                <h3 className="title">
                    Latest Bleets
                </h3>
                <Link to="/new-bleet" className="btn">Bleet</Link>
            </div>
        </>
    );
};

export default Middle;