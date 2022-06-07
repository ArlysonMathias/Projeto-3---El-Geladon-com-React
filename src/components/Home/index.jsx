import React, { useState } from "react";
import "./style.css"
import Cards from "components/Cards";
import paletas from "../../mocks/index.js";

const Home = ()=>{
    const [palette, setPalette] =useState(paletas)

    return <div className="home">
        <h2>Lista de Paletas</h2>
        <div className="home-container">
            {palette.map((element, index) => {
                return <Cards key={index} palette={element}/> 
            }
            )}
        </div>
    </div>
}

export default Home;