import React from "react";
import { HeroList } from "../hero/HeroList";


export const MarvelScreen = () => {

    const MARVEL = 'Marvel Comics';

    return (
        <div>
            <h1>MARVEL</h1>
            <hr />

            <HeroList publisher={ MARVEL } />
        </div>
    )
}