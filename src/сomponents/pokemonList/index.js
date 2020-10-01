import React, {Component} from "react";
import {connect} from 'react-redux'
import {
    fetchPokemonList
} from "../../actions";

import './index.scss'
import CardItem from "../cardItem";
import PageButtonList from "../pageButtonList";

class PokemonList extends Component {

    componentDidMount() {
        const {fetchPokemonList} = this.props;
        fetchPokemonList(1)
    }

    render() {
        return (
            <div className='pokemon-list'>
                <div className='pokemon-list__cards'>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                </div>
                <PageButtonList/>
            </div>

        )
    }


}

const mapStateToProps = (state) => {
    const {pokemonList} = state.mainPage;
    return {
        pokemonList
    }
};

const mapDispatchToProps = {
    fetchPokemonList
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
