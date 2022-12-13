import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Games } from './Components/Games';
import { Community } from './Components/Community';
import {Game} from './Components/Game';
import {LoginPage} from './Components/LoginPage'
import {RegisterPage} from './Components/RegisterPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path='/login' element={<LoginPage/>}></Route>
                 <Route path='/sign-up' element={<RegisterPage/>}></Route>
                 <Route path='/home' element={<Main />}></Route>
                 <Route path='/games/list' element={<Games />}></Route>
                 <Route path='/games/:id' element={<Game />}></Route>
                 <Route path='/community' element={<Community />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;