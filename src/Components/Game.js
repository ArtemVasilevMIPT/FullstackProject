import '../Styles/Game.css'
import { Header } from './Header';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { authRequest } from '../Api/Auth';

const default_pfp = require('../Images/default_pfp.jpg');
const game_icon = require('../Images/d12.jpg');
export function Game() {
    let { id } = useParams();
    const [data, setData] = useState({
        data : {},
        isLoading: true,
    });
    const [players, setPlayers] = useState({
        data : [],
        isLoading: true,
    })
    const [gm, setGm] = useState({
        data: {},
        isLoading: true,
    })
    useEffect(() => {
    async function func() {
        await authRequest.get(`/api/games/get/${id}/`).then(async (response) => {
            setData({data: response.data, isLoading: false})
            let list = []
            for (let player of response.data['players']) {
                list.push(authRequest.get(`/api/user/get/${player}/`))
            }
            await Promise.all(list).then(async (values) => {
                setPlayers({data: values.map((res) => res.data), isLoading: false})
                await authRequest.get(`/api/user/get/${response.data['gm']}/`).then((response) => {
                    setGm({data: response.data, isLoading: false});
                }).catch((error) => {
                    console.log("Error in gm fetching")
                })
            }).catch((error) => {
                console.log("Error in players fetching")
            })
        }).catch((error) => {
            console.log("Error in game fetching")
        })
    }
    func();
    }, [])

    //useEffect(() => func(), []);
    //func();

    return (        
        <>
        <Header/>
        <div className='game-container'>
            {!data.isLoading ? <h1 className='game-name'>{data.data['name']}</h1> :
                                            <h1 className='game-name'>Loading...</h1>}
            <button className='launch-button'>Launch game</button>
            {!data.isLoading ? <img className='game-image' alt='No image(' src={data.data['image']}/> :
                                            <h1 className='game-name'>Loading...</h1>}
            <div>
                <h1 className='section-name'>Game master</h1>
                <div className='gm-container'>
                    {
                        !gm.isLoading ?
                    <>
                        <img className='pfp' alt='No pic(' src={gm.data['profile_pic']}/>
                        <p className='name'>{gm.data['nickname']}</p>
                    </> : <h1 className='game-name'>Loading...</h1>
                    } 
                </div>
            </div>
            <div className='game-info'>
                <span className='span'>Game description</span>
                <div className='description-wrapper'>
                    {!data.isLoading ? <p className='description'>{data.data['description']}</p> :
                                                    <h1 className='game-name'>Loading...</h1>}
                </div>
            </div>
            <div>
            <h1 className='section-name'>Players</h1>
                <div className='player-container'>
                    {!players.isLoading ?
                    players.data.map((player) => (
                        <img className='pfp' alt='No pic(' src={player['profile_pic']}/>
                    )) : <h1 className='game-name'>Loading...</h1>
                }
                </div>
            </div>
        </div>
        </>
    );
}