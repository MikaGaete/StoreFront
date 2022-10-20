import React from 'react'
import ReactDOM from 'react-dom/client'
import {Landing} from './Landing.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./NavBar";
import {Login} from "./Login";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<NavBar/>}>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
