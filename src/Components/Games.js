import { GameItem } from "./GameItem";
import '../Styles/Games.css'

export function Games() {
    return (
        <div className="games-wrapper">
        <div className="games-list">
            <GameItem/>
            <GameItem/>
            <GameItem/>
            <GameItem/>
        </div>
        <button className="create-button">Create game</button>
    </div>
    );
}