import React, { useState, useContext }  from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from "../Contexts/UserContext";
import { loginUser, logoutUser } from "../Api/Auth";
import '../Styles/LoginForm.css'

// Hook to get query params.
// this could be refactored to somewhere else for future contributors.
function useQueryParams () {
    return new URLSearchParams(useLocation().search);
}

function LoginForm() {
    let navigate = useNavigate();
    const queryParams = useQueryParams();
    const {user, setUser, isUserLoggedIn} = useContext(UserContext)
  
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorDisplay, setErrorDisplay] = useState("")

    const onLoginFormSubmit = (event) => {
    event.preventDefault();
    if (!isValidForm()){
      return
    }
    loginUser(username, password).then((data)=>{
      setUser({username: username})
      console.log(data);
      navigate("/home");
    }).catch((error)=> {
      setErrorDisplay()
    })
    };

    const isValidForm = () => {
        setErrorDisplay("")
        if (username === "" || password === ""){
          setErrorDisplay("username and password can't be empty. try user: test, password: test")
          return false;
        }
        return true;
    }

    const logout = () => {
        logoutUser()
        setUser(null);
    }

    return (
        <div className="Container">
        <form className="LoginForm" onSubmit={onLoginFormSubmit}>
            <label for="email" className="FormLabel">Email</label>
            <input type="text" className="FormInput" name="email" onChange={(event) => {setUsername(event.target.value)}}></input>
            <label for="password" className="FormLabel">Password</label>
            <input type="password" className="FormInput" name="password" onChange={(event)=>{setPassword(event.target.value)}}></input>
            <button type="submit" className="FormButton">Login</button>
            <p style={{color: 'red'}}className="FormText">{errorDisplay}</p>
            <p className="FormText">or</p>
            <Link to="/sign-up">
                <p id="create" className="FormText">create an account</p>
            </Link>
        </form>
        </div>
    );
}

export default LoginForm;