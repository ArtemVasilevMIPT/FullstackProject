import React from "react";
import '../Styles/RegisterForm.css'

export class RegisterForm extends React.Component {
    render() {
        return (
            <div className="Container">
            <form action="index.html" className="RegisterForm">
                <label for="email" className="FormLabel">Email</label>
                <input type="email" className="FormInput" name="email"></input>
                <label for="password" className="FormLabel">Password</label>
                <input type="password" className="FormInput" name="password"></input>
                <label for="password" className="FormLabel">Repeat password</label>
                <input type="password" className="FormInput" name="repeat-password"></input>
                <button type="submit" className="FormButton">Create Account</button>
            </form>
            </div>
        );
    }
}