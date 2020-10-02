import React, {Component} from "react";
import NavBar from "../../сomponents/navbar";
import PokemonList from "../../сomponents/pokemonList";
import Header from "../../сomponents/header";
import Footer from "../../сomponents/footer";

class MainPage extends Component {


        render() {
                const {pathname} = this.props.location;
                const page = parseInt(pathname.match(/\d+/));
                return(
                    <div>
                            <Header/>
                            <NavBar/>
                            <PokemonList page={page}/>
                            <Footer/>
                    </div>
                )
        }


};

export default MainPage;
