import React, {Component} from "react";
import {Link} from "react-router-dom";

import './index.scss'

import {
    fetchPokemonItemApi
} from '../../service'
import {getImageUrl} from "../../selectors";


class CardItem extends Component {

    state = {
        imageUrl: "",
        pokemon: {}
    };

    componentDidMount() {
        const {url} = this.props.data;
        fetchPokemonItemApi(url).then((pokemon)=>{
            this.setState({"pokemon": pokemon});
            const imageUrl =  getImageUrl(pokemon);
            this.setState({"imageUrl" : imageUrl});
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data.url !== this.props.data.url){
            fetchPokemonItemApi(this.props.data.url).then((pokemon)=>{
                this.setState({"pokemon": pokemon});
                const imageUrl =  getImageUrl(pokemon);
                this.setState({"imageUrl" : imageUrl});
            })
        }
    }

    render() {
        const {name} = this.props.data;
        const {imageUrl} = this.state;
        const {id} = this.state.pokemon;
        return (
            <div className='card-item'>
                <Link to={`/item/${id}`}>
                    <div className='card-item__image'>
                        <img src={imageUrl} alt=""/>
                    </div>
                    <div className='card-item__name'>
                        <p className='text'>
                            {name}
                        </p>
                    </div>
                </Link>
            </div>
        )
    }
}


export default CardItem;
