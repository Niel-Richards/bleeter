import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewBleet = () => {

    const CHARACTER_LIMIT = 140;
    const [charCount, setCharCount] = useState(140);

    const navigate = useNavigate();

    const updateCount = (e) => setCharCount(CHARACTER_LIMIT - e.target.value.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.bleet.value.length > 0) navigate('/home');
    };

    return (
        <div>
            <form className="bleet-form" action="" method="post" id="bleet-form" onSubmit={handleSubmit}>
                    <h2 className="title">New Bleet!</h2>
                    <input type="text" className="bleet-input" name="bleet" placeholder="What's on your Mind" autoComplete="off" onChange={updateCount}/> <br />
                    <small className="bleet-help"><span id="bleet-count">{charCount}</span> characters left!</small><br />

                <button type="submit" className="btn" id="submit-bleet" name="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewBleet;