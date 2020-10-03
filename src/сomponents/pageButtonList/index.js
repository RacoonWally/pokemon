import React, {Component} from "react";
import {connect} from 'react-redux';

import './index.scss'
import PageButton from "../pageButton";
import {
    setCurrentPage
} from "../../actions";


class PageButtonList extends Component {

    render() {
        const {countArray, currentPage} = this.props;
        if (countArray !== undefined) {
            return (
                <div className='page-button-list'>
                    {
                        countArray.map((item, key) => {
                            return (
                                <PageButton clN={currentPage === item ? "page-button_active" : ""} pageNumber={item}
                                            key={key}/>
                            )
                        })
                    }
                </div>
            )
        }
        return (
            <div className='page-button-list'>
                <PageButton pageNumber='1'/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {count, currentPage, countArray} = state.mainPage;
    return {
        count,
        currentPage,
        countArray
    }
};

const mapDispatchToProps = {
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(PageButtonList);
