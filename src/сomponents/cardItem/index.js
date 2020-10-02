import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import './index.scss'

import {
    fetchPokemonItem
} from '../../actions'

class CardItem extends Component {

    componentDidMount() {
        const {url} = this.props.data;
        const {fetchPokemonItem} = this.props;
        fetchPokemonItem(url)
    }


    render() {
        const {name} = this.props.data;
        const {imageUrl} = this.props;
        const url = {...imageUrl};
        return (
            <div className='card-item'>
                <Link to={`/`}>
                    <div className='card-item__image'>
                        <img src={url.imageUrl} alt=""/>
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

const mapStateToProps = (state) => {
    const {imageUrl} = state.mainPage;
    return {
        imageUrl
    }
};

const mapDispatchToProps = {
    fetchPokemonItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
