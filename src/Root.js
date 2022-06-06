import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from "./layout/LoginPage";
import EntryPage from "./layout/EntryPage";

const Root = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<EntryPage />}/>
            <Route path="login" element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>

}

export default Root;
