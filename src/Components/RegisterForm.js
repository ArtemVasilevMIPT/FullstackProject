import React, { useState, useContext }  from "react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../Api/Auth";
import '../Styles/RegisterForm.css'

export function RegisterForm() {
    const {user, setUser, isUserLoggedIn} = useContext(UserContext)
    let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeat, setPasswordRepeat] = useState("")
    const [errorDisplay, setErrorDisplay] = useState("")

    const onRegisterFormSubmit = (event) => {
        event.preventDefault();
        registerUser(username, password, password_repeat).then((data) => {
            console.log(data);
            navigate("/login");
        }).catch((error)=> {
            setErrorDisplay()
        })
    };

    return (
        <div className="Container">
        <form className="RegisterForm" onSubmit={onRegisterFormSubmit}>
            <label for="email" className="FormLabel">Email</label>
            <input type="text" className="FormInput" name="email" onChange={(event) => {setUsername(event.target.value)}}></input>
            <label for="password" className="FormLabel">Password</label>
            <input type="password" className="FormInput" name="password" onChange={(event) => {setPassword(event.target.value)}}></input>
            <label for="password" className="FormLabel">Repeat password</label>
            <input type="password" className="FormInput" name="repeat-password" onChange={(event) => {setPasswordRepeat(event.target.value)}}></input>
            <p style={{color: 'red'}}className="FormText">{errorDisplay}</p>
            <button type="submit" className="FormButton">Create Account</button>
        </form>
        </div>
    );
}