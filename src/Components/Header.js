import { HeaderLink } from "./HeaderLink";
import {useContext, useEffect} from 'react';
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import {authRequest} from "../Api/Auth";
import '../Styles/Header.css';

const logo = require('../Images/d12.jpg');
const def_pfp = require('../Images/default_pfp.jpg')

export function Header() {
    
    let navigate = useNavigate();
    const {user, setUser, isUserLoggedIn} = useContext(UserContext)
    useEffect(() => {
        async function func() {
        let result = await authRequest.get('/api/user/update/').then((response) => {
            setUser({username: response.data['nickname'], pfp: response.data['profile_pic']})
        }).catch((error) => {
            navigate("/login");
        })
        }
        func();
        }, []);
    
    return (
        <header className="main-header">
            <img src={logo} className="logo-img"/>
            <span className="site-name">Awesome Tabletop</span>
            <HeaderLink to='/home'>Home</HeaderLink>
            <HeaderLink to='/games/list'>Games</HeaderLink>
            <HeaderLink to='/community'>Community</HeaderLink>
            <a href="">
                <img src={user.pfp} className="profile-pic"/>
            </a>
        </header>
    );
};