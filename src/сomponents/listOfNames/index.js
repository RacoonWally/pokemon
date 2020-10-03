import React, {Component} from "react";
import {connect} from "react-redux";

import './index.scss'

import {
    fetchAllPokemon
} from '../../actions'
import {Link} from "react-router-dom";

class ListOfNames extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {fetchAllPokemon, pokemonList, allPokemonList} = this.props;
        if (pokemonList && !allPokemonList) {
            fetchAllPokemon(pokemonList.count);
        }
    }

    render() {
        const {allPokemonList, active} = this.props;
        if (allPokemonList !== undefined) {
            const {results} = allPokemonList;
            return (
                <div className={`list-of-names ${active ? "active" : ""}`}>
                    <div className='list-of-names__container'>
                        {results.map((item, key) => {
                            const itemId = item.url.substr(33).replace(/\D/g,'');
                            return (
                                <Link to={`/item/${itemId}`} key={key}>
                                    <div className='list-of-names__item'>
                                        <p className='text'>{item.name}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {pokemonList, allPokemonList, active} = state.mainPage;
    return {
        pokemonList,
        allPokemonList,
        active
    };

};

const mapDispatchToProps = {
    fetchAllPokemon
};


export default connect(mapStateToProps, mapDispatchToProps)(ListOfNames)
