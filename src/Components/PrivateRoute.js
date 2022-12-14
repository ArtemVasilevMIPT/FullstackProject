import React, { useContext } from "react";
import {Navigate} from "react-router-dom";
import {authRequest} from "../Api/Auth";
import { UserContext } from '../Contexts/UserContext';

export const PrivateRoute = async ({children}) => {
    const {user, setUser, isUserLoggedIn} = useContext(UserContext)
    let result = await authRequest.get('/api/user/update/').then((response) => {
        setUser({username: response.data['nickname']})
        return true;
    }).catch((error) => {
        return false;
    });
    if (result) {
        console.log("Navigating to login");
        return children;
    } else {
        console.log("Navigating to login");
        return <Navigate to="/login"/>
    }
}

