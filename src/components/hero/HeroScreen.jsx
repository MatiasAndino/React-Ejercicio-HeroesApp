// import React from "react";
import { useParams, Navigate } from "react-router-dom"
import { getHeroById } from '../../selectors/getHeroesById'

export const HeroScreen = () => {

    const { heroId } = useParams();

    const hero = getHeroById( heroId );

    if ( !hero ) {
        return <Navigate to='/' />
    }

    return (
        
        <p>
            { hero.superhero }
        </p>
    )
}