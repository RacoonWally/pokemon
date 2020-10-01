import React from "react";
import NavBar from "../../сomponents/navbar";
import PokemonList from "../../сomponents/pokemonList";
import Header from "../../сomponents/header";
import Footer from "../../сomponents/footer";

const MainPage = () => {

        return(
            <div>
                <Header/>
                <NavBar/>
                <PokemonList/>
                <Footer/>
            </div>
        )
};

export default MainPage;
