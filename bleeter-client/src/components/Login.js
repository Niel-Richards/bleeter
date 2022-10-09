import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css"

const Login = () => {
    return (
        <>
            <form className="login-form" method="POST">
                <h2>Login</h2>
                <input type="text" class="bleet-input" id="username" name="username" autocomplete="off" placeholder="Username"/> 
                <input type="password" class="bleet-input" id="password" name="pwd" autocomplete="off" placeholder="Password"/> 
                <button type="submit" name="submit" class="btn">Login</button>
                <small>Don't have an account? 
                    <Link to="/register"> Register Here</Link>
                </small>
            </form>
        </>
        );
};

export default Login;