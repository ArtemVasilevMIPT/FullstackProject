import '../Styles/GameItem.css'

const game_pic = require('../Images/default_game_pic.png')
const button_pic = require('../Images/triangle.png')

export function GameItem() {
    return (
        <div className="game-item">
            <img className="game-pic" src={game_pic}/>
            <div className="text-wrapper">
                <h1 className="game-title">Sample title</h1>
                <p className="description">Sample Desciption</p>
            </div>
            <button className="play-button">
                <img className="triangle" src={button_pic}/>
            </button>
        </div>
    );
}