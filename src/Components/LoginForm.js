import React from "react";
import '../Styles/LoginForm.css'
import '../Styles/Utils.css'

class LoginForm extends React.Component {
    render() {
        return (
            <>
            <div className="Container"></div>
            <form action="index.html" className="LoginForm">
                <label for="email" id="email-label">Email</label>
                <input type="email" id="email" name="email"></input>
                <label for="password" id="password-label">Password</label>
                <input type="password" id="password" name="password"></input>
                <button type="submit" id="submit-button" className="DefaultButton">Login</button>
                <p id="or">or</p>
                <p id="create">create an account</p>
            </form>
            </>
        );
    }
}

export default LoginForm;