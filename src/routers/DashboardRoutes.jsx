// import React from "react";
import { Routes, Route } from 'react-router-dom';
import { DCScreen } from '../components/dc/DCScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';
import { HeroScreen } from '../components/hero/HeroScreen';


export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div 
                className='container'
            >
                <Routes>
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="Marvel" element={<MarvelScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                    
                    <Route path="/" element={<DCScreen />} />
                </Routes>
            </div>
        </>
    )
};