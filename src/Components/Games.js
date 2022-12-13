import { GameItem } from "./GameItem";
import '../Styles/Games.css'
import { Header } from "./Header";

export function Games() {
    return (
        <>
        <Header/>
        <div className="games-wrapper">
        <div className="games-list">
            <GameItem/>
            <GameItem/>
            <GameItem/>
            <GameItem/>
        </div>
        <button className="create-button">Create game</button>
        </div>
        </>
    );
}