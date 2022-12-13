import React from "react";
import { Link, Navigate } from 'react-router-dom';
import '../Styles/LoginForm.css'
import '../Styles/Utils.css'


class LoginForm extends React.Component {
    render() {
        return (
            <div className="Container">
            <form action="index.html" className="LoginForm">
                <label for="email" className="FormLabel">Email</label>
                <input type="email" className="FormInput" name="email"></input>
                <label for="password" className="FormLabel">Password</label>
                <input type="password" className="FormInput" name="password"></input>
                <Link to="/home">
                <button type="submit" className="FormButton">Login</button>
                </Link>
                <p className="FormText">or</p>
                <Link to="/sign-up">
                    <p id="create" className="FormText">create an account</p>
                </Link>
            </form>
            </div>
        );
    }
}

export default LoginForm;