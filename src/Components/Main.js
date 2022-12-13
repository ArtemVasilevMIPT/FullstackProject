import { GameItem } from "./GameItem";
import { Header } from "./Header";
import '../Styles/Main.css'

export function Main() {

    return (
    <>
    <Header />
    <div className="wrapper">
        <h1 className="recent">Recent games</h1>
        <div className="game-list">
            <GameItem/>
            <GameItem/>
            <GameItem/>
            <GameItem/>
        </div>
    </div>
    </>
    );

}