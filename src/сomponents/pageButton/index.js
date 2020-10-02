import React, {Component} from "react";
import {connect} from 'react-redux'

import './index.scss'

import {
    setCurrentPage,
    fetchPokemonList
} from "../../actions";
import {calcOffset} from "../../selectors";
import {Link} from "react-router-dom";


class PageButton extends Component {

    render() {
        const {pageNumber, clN, setCurrentPage, fetchPokemonList} = this.props;
        const offset = calcOffset(pageNumber);
        return (
            <div className={`page-button ${clN}`}>
                <Link to={`/page/${pageNumber}`}>
                    <button onClick={(e) => {
                        setCurrentPage(pageNumber);
                        fetchPokemonList(offset)
                    }}>
                        {pageNumber}
                    </button>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = {
    setCurrentPage,
    fetchPokemonList
};

export default connect(null, mapDispatchToProps)(PageButton);
