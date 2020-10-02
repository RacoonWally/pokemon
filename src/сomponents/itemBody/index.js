import React, {Component} from "react";
import {connect} from 'react-redux';

import './index.scss'

import {fetchPokemonItem} from '../../actions'


class ItemBody extends Component {

    componentDidMount() {
        const {fetchPokemonItem, itemId} = this.props;
        fetchPokemonItem(itemId);
    }

    renderAbilities = (abilities) => {
        if (abilities !== undefined){
            return abilities.map((item, key) => {
                const {name} = item.ability;
                return (
                    <div className='item-body__text' key={key}>
                        <p className='text'>{name};</p>
                    </div>
                )
            })
        }
    };

    renderSingleAttribute = (attribute)=> {
        if (attribute !== undefined){
            return(
                <div className='item-body__text'>
                    <p className='text'>{attribute};</p>
                </div>
            )
        }
    };

    renderForms = (forms) => {
        if (forms !== undefined){
            return forms.map((item, key) => {
                const {name} = item;
                return (
                    <div className='item-body__text' key={key}>
                        <p className='text'>{name};</p>
                    </div>
                )
            })
        }
    };

    render() {
        const {pokemon} = this.props;
        const {abilities = [], base_experience, forms, height, name, sprites} = {...pokemon};
        console.log(forms);
        if (pokemon !== undefined) {
            const image = sprites.other.dream_world.front_default;
            return (
                <div className='item-body'>
                    <div className='item-body__image'>
                        <img src={image} alt=""/>
                    </div>
                    <div className='item-body__container'>
                        <div className='item-body__text item-body__text_title'>
                            <p className='title'>Описание</p>
                        </div>
                        <div className='item-body__description'>
                            <div className='item-body__text'>
                                <p className='subtitle'>Имя:</p>
                            </div>
                            {this.renderSingleAttribute(name)}
                        </div>
                        <div className='item-body__description'>
                            <div className='item-body__text'>
                                <p className='subtitle'>Способности:</p>
                            </div>
                            {this.renderAbilities(abilities)}
                        </div>
                        <div className='item-body__description'>
                            <div className='item-body__text'>
                                <p className='subtitle'>Опыт:</p>
                            </div>
                            {this.renderSingleAttribute(base_experience)}
                        </div>
                        <div className='item-body__description'>
                            <div className='item-body__text'>
                                <p className='subtitle'>Формы:</p>
                            </div>
                            {this.renderForms(forms)}
                        </div>
                        <div className='item-body__description'>
                            <div className='item-body__text'>
                                <p className='subtitle'>Вес:</p>
                            </div>
                            {this.renderSingleAttribute(height)}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className='item-body'>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {pokemon} = state.itemPage;
    return {
        pokemon
    }
};

const mapDispatchToProps = {
    fetchPokemonItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemBody);
