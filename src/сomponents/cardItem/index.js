import React from "react";

import './index.scss'
import {Link} from "react-router-dom";

const CardItem = () => {
    return (
        <div className='card-item'>
            <div className='card-item__image'>
                <img src="../../../public/image/klipartz.com.png" alt=""/>
            </div>
            <div className='card-item__name'>
                <p className='text'>
                    Bulbasaurus
                </p>
            </div>
        </div>
    )
};

export default CardItem;
