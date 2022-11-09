import { GameItem } from "./GameItem";
import '../Styles/Main.css'

export function Main() {

    return (
    <div className="wrapper">
        <h1 className="recent">Recent games</h1>
        <div className="game-list">
            <GameItem/>
            <GameItem/>
            <GameItem/>
            <GameItem/>
        </div>
    </div>
    );

}