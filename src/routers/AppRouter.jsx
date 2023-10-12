// import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DCScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Navbar />
            <Routes>
                <Route path="/" element={<DCScreen />} />
                <Route path="/dc" element={<DCScreen />} />
                <Route path="/Marvel" element={<MarvelScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
};