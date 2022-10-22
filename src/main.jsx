import React from 'react'
import ReactDOM from 'react-dom/client'
import {Landing} from './Pages/Landing.jsx'
import './styles/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./Components/NavBar.jsx";
import {Login} from "./Pages/Login.jsx";
import {Profile} from "./Pages/Profile.jsx";
import {Cart} from "./Pages/Cart.jsx";
import {Register} from "./Pages/Register.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<NavBar/>}>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
