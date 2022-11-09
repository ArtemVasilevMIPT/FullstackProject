import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Games } from './Components/Games';
import { Community } from './Components/Community';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                 <Route path='' element={<Main />}></Route>
                 <Route path='/games/list' element={<Games />}></Route>
                 <Route path='/community' element={<Community />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;