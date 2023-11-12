import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

export default function Routing() {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/home/:_id" element={<Home />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}