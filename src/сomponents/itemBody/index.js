import React from "react";

import './index.scss'

const ItemBody = () => {
    return (
        <div className='item-body'>
            <div className='item-body__image'>
                <img src="../../../public/image/klipartz.com.png" alt=""/>
            </div>
            <div className='item-body__container'>
                <div className='item-body__text'>
                    <p className='title'>Lorem ipsum dolor.</p>
                </div>
                <div className='item-body__text'>
                    <p className='subtitle'>Lorem ipsum dolor.</p>
                </div>
                <div className='item-body__text'>
                    <p className='text'>Lorem ipsum dolor.</p>
                </div>
                <div className='item-body__text'>
                    <p className='text'>Lorem ipsum dolor.</p>
                </div>
                <div className='item-body__text'>
                    <p className='text'>Lorem ipsum dolor.</p>
                </div>
            </div>
        </div>
    )
};

export default ItemBody;
