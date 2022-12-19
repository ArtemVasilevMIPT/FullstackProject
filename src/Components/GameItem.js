import '../Styles/GameItem.css'
import { Link } from 'react-router-dom';

const game_pic = require('../Images/default_game_pic.png')
const button_pic = require('../Images/triangle.png')

export function GameItem(props) {
    return (
        <div className="game-item">
            <img className="game-pic" src={props.img}/>
            <div className="text-wrapper">
                <Link className="game-title" to={`/games/${props.id}`}>{props.name}</Link>
                <p className="description">{props.description}</p>
            </div>
            <button className="play-button"></button>
        </div>
    );
}