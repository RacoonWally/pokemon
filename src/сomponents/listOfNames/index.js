import React, {Component} from "react";
import {connect} from "react-redux";

import './index.scss'

import {
    fetchAllPokemon
} from '../../actions'

class ListOfNames extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {fetchAllPokemon, pokemonList, allPokemonList} = this.props;
        if (pokemonList && !allPokemonList){
            fetchAllPokemon(pokemonList.count);
        }
    }

    render() {
        const {allPokemonList} = this.props;
        if (allPokemonList !== undefined){
            const {results} = allPokemonList;
            return (
                <div>
                    {results.map((item, key)=>{
                        return(
                            <div key={key}>
                                <p className='text'>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }
        return (
            <div>
                Bla
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {pokemonList, allPokemonList} = state.mainPage;
    return {
        pokemonList,
        allPokemonList
    };

};

const mapDispatchToProps = {
    fetchAllPokemon
};


export default connect(mapStateToProps, mapDispatchToProps)(ListOfNames)
