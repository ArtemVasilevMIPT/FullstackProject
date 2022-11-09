import '../Styles/GameItem.css'
import { Link } from 'react-router-dom';

const game_pic = require('../Images/default_game_pic.png')
const button_pic = require('../Images/triangle.png')

export function GameItem() {
    return (
        <div className="game-item">
            <img className="game-pic" src={game_pic}/>
            <div className="text-wrapper">
                <Link className="game-title" to="/games/1">Sample title</Link>
                <p className="description">Sample Desciption</p>
            </div>
            <button className="play-button"></button>
        </div>
    );
}