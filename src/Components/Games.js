import { GameItem } from "./GameItem";
import {useContext, useEffect, useState} from 'react';
import { UserContext } from "../Contexts/UserContext";
import { authRequest } from "../Api/Auth";
import '../Styles/Games.css'
import { Header } from "./Header";

export function Games() {
    const {user, setUser, isUserLoggedIn} = useContext(UserContext);
    const [data, setData] = useState([]);
    const func = () => {
        if (Object.is(user, null)) {
            console.log("User is null");
            return;
        }
        authRequest.get(`/api/games/get/?user=${user['id']}&all=true`).then((response) => {
            setData(response.data['game_list'])
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => func(), []);
    return (
        <>
        <Header/>
        <div className="games-wrapper">
        <div className="games-list">
        {data.map((game) => (<GameItem name={game['name']} 
                                            id={game['id']} 
                                            description={game['description']}
                                            img={game['image']}
                                            />))}
        </div>
        <button className="create-button">Create game</button>
        </div>
        </>
    );
}