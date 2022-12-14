import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './Contexts/UserContext';
import { logoutUser } from './Api/Auth';
import { Main } from './Components/Main';
import { Games } from './Components/Games';
import { Community } from './Components/Community';
import {Game} from './Components/Game';
import {LoginPage} from './Components/LoginPage'
import {RegisterPage} from './Components/RegisterPage'
import { PrivateRoute } from './Components/PrivateRoute';

function App() {
    const [user, setUser] = useState(null);
    const isUserLoggedIn = () => {
        return !!user;
    }
    const logout = (event) => {
        event.preventDefault();
        logoutUser();
        setUser(null);
    }

    return (
        <>
        <UserContext.Provider value={{user, setUser, isUserLoggedIn}}>
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
        </UserContext.Provider>
        </>
    );
};
/*
                <Route path='/home' element={<Main />}></Route>
                <Route path='/games/list' element={<Games />}></Route>
                <Route path='/games/:id' element={<Game />}></Route>
                <Route path='/community' element={<Community />}></Route>
                 <PrivateRoute path="/home" element={Main}></PrivateRoute>
                 <PrivateRoute path="/games/list" element={Games}></PrivateRoute>
                 <PrivateRoute path="/games/:id" element={Game}></PrivateRoute>
                 <PrivateRoute path="/community" element={Community}></PrivateRoute> 
*/
export default App;