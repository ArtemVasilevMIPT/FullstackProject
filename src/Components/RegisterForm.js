import React from "react";
import '../Styles/RegisterForm.css'
import '../Styles/Utils.css'

export class RegisterForm extends React.Component {
    render() {
        return (
            <>
            <div className="Container"></div>
            <form action="index.html" className="LoginForm">
                <label for="email" id="email-label">Email</label>
                <input type="email" id="email" name="email"></input>
                <label for="password" id="password-label">Password</label>
                <input type="password" id="password" name="password"></input>
                <label for="password" id="repeat-password-label">Repeat password</label>
                <input type="password" id="repeat-password" name="repeat-password"></input>
                <button type="submit" id="submit-button" className="DefaultButton">Create Account</button>
            </form>
            </>
        );
    }
}