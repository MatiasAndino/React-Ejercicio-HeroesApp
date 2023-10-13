import React from "react";
import { HeroList } from "../hero/HeroList";

export const DCScreen = () => {
    
    const DC = 'DC Comics';
    
    return (
        <div>
            <h1>DC</h1>
            <hr />
            
            <HeroList publisher={ DC } />


        </div>
    )
}