import { GameItem } from "./GameItem";
import {useContext, useEffect, useState} from 'react';
import { Header } from "./Header";
import { UserContext } from "../Contexts/UserContext";
import { authRequest } from "../Api/Auth";
import '../Styles/Main.css'

export function Main() {
    const {user, setUser, isUserLoggedIn} = useContext(UserContext);
    const [data, setData] = useState([]);
    const func = () => {
        if (Object.is(user, null)) {
            console.log("User is null");
            return;
        }
        authRequest.get(`/api/games/get/?user=${user['id']}&all=false`).then((response) => {
            setData(response.data['game_list'])
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => func(), []);
    return (
    <>
    <Header />
    <div className="wrapper">
        <h1 className="recent">Recent games</h1>
        <div className="game-list">
            {data.map((game) => (<GameItem name={game['name']} 
                                            id={game['id']} 
                                            description={game['description']}
                                            img={game['image']}
                                            />))}
        </div>
    </div>
    </>
    );
}

/*
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            error: null,
            user: user,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        authRequest.get(`/api/games/get/?user=${this.user['id']}&all=false`).then((response) => {
            setData(response.data['game_list'])
        }).catch((error) => {
            //navigate("/login");
        })
    }
}
*/