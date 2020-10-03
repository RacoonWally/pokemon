import React, {Component} from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import {
    setCurrentPage,
    fetchPokemonList,
    setActiveClass
} from "../../actions";
import {calcOffset} from "../../selectors";

import './index.scss'


class NavBar extends Component {


    render() {
        const {setCurrentPage, fetchPokemonList, countArray = [], setActiveClass, active} = this.props;
        const lastPage = countArray.length;

        return (
            <div className='nav-bar'>
                <div className='nav-bar__item'>
                    <div className='nav-bar__text-link' onClick={()=> {
                        setActiveClass(!active);
                    }}>
                        <p className='text'>Посмотреть всех</p>
                    </div>
                </div>
                <div className='nav-bar__item'>
                    <Link className='link' to='/page/1' onClick={() => {
                        const offset = calcOffset(1);
                        setCurrentPage(1);
                        fetchPokemonList(offset);
                        window.scrollTo(0, 0)
                    }
                    }>На первую страницу</Link>
                </div>
                <div className='nav-bar__item'>
                    <Link className='link' to={`/page/${lastPage}`} onClick={() => {
                        const offset = calcOffset(lastPage);
                        setCurrentPage(lastPage);
                        fetchPokemonList(offset);
                        window.scrollTo(0, 0)
                    }}>На последнюю страницу</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {countArray, active} = state.mainPage;
    return {
        countArray,
        active
    }
};

const mapDispatchToProps = {
    setCurrentPage,
    fetchPokemonList,
    setActiveClass
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
