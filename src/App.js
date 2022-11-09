import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Games } from './Components/Games';
import { Community } from './Components/Community';
import {Game} from './Components/Game';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                 <Route path='/home' element={<Main />}></Route>
                 <Route path='/games/list' element={<Games />}></Route>
                 <Route path='/games/:id' element={<Game />}></Route>
                 <Route path='/community' element={<Community />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;