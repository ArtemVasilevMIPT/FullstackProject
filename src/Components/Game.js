import '../Styles/Game.css'
import { Header } from './Header';

const default_pfp = require('../Images/default_pfp.jpg');
const game_icon = require('../Images/d12.jpg');
export function Game() {
    return (
        <>
        <Header/>
        <div className='game-container'>
            <h1 className='game-name'>Game name</h1>
            <button className='launch-button'>Launch game</button>
            <img className='game-image' alt='No image(' src={game_icon}/>
            <div>
                <h1 className='section-name'>Game master</h1>
                <div className='gm-container'>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <p className='name'>Player name</p>
                </div>
            </div>
            <div className='game-info'>
                <span className='span'>Game description</span>
                <div className='description-wrapper'>
                    <p className='description'>Sample description</p>
                </div>
            </div>
            <div>
            <h1 className='section-name'>Players</h1>
                <div className='player-container'>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                    <img className='pfp' alt='No pic(' src={default_pfp}/>
                </div>
            </div>
        </div>
        </>
    );
}