import { HeaderLink } from "./HeaderLink";
import '../Styles/Header.css';

const logo = require('../Images/d12.jpg');
const def_pfp = require('../Images/default_pfp.jpg')

export function Header() {
    return (
        <header className="main-header">
            <img src={logo} className="logo-img"/>
            <span className="site-name">Awesome Tabletop</span>
            <HeaderLink to='/home'>Home</HeaderLink>
            <HeaderLink to='/games/list'>Games</HeaderLink>
            <HeaderLink to='/community'>Community</HeaderLink>
            <a href="">
                <img src={def_pfp} className="profile-pic"/>
            </a>
        </header>
    );
};