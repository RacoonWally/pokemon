import React, {Component} from "react";
import {connect} from 'react-redux'
import LoadingIndicator from 'react-loading-indicator'

import {
    fetchPokemonList,
    setCurrentPage,
} from "../../actions";

import './index.scss'
import CardItem from "../cardItem";
import PageButtonList from "../pageButtonList";

class PokemonList extends Component {

    componentDidMount() {
        const {fetchPokemonList, setCurrentPage, page} = this.props;
        fetchPokemonList(page);
        setCurrentPage(page);
    }

    render() {
        const {pokemonList, loading} = this.props;
        if (pokemonList !== undefined) {
            return (
                <div className='pokemon-list'>
                    <div className='pokemon-list__cards'>
                        {
                            pokemonList.results.map((item, key) => {
                                return (
                                    <CardItem data={item} key={key}/>
                                )
                            })
                        }
                    </div>
                    <PageButtonList/>
                </div>
            )
        } else if (loading) {
            return (
                <div className='pokemon-list__loading'>
                    <LoadingIndicator segmentWidth={20} segmentLength={5} spacing={12}/>
                </div>
            )

        }


        return (
            <div className='pokemon-list'>
                <div className='pokemon-list__cards'>

                </div>
            </div>
        )


    }


}

const mapStateToProps = (state) => {
    const {pokemonList, loading, imageUrl} = state.mainPage;
    return {
        pokemonList,
        loading,
        imageUrl
    }
};

const mapDispatchToProps = {
    fetchPokemonList,
    setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
