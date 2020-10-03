import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {calcOffset} from "../../selectors";
import {fetchPokemonList, setActiveClass, setCurrentPage} from "../../actions";

import './index.scss'


class Header extends Component {
    render() {
        const {setCurrentPage, fetchPokemonList} = this.props;
        return (
            <div className='header'>
                <div className='header__image'>
                    <Link className='link' to='/page/1' onClick={() => {
                        const offset = calcOffset(1);
                        setCurrentPage(1);
                        fetchPokemonList(offset);
                        window.scrollTo(0, 0)
                    }}>
                        <img src="../../../public/image/NicePng_pokemon-logo-png_14636.png" alt=""/>
                    </Link>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = {
    setCurrentPage,
    fetchPokemonList,
    setActiveClass
};

export default connect(null, mapDispatchToProps)(Header);
