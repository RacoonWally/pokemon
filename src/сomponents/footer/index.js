import React from "react";
import {Link} from "react-router-dom";

import './index.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__main'>
                <div className='footer__image'>
                    <img src="../../../public/image/kissclipart-spiky-hair-pikachu-clipart-pikachu-pokémon-thunde-604d1d580b04bea8.png" alt="pikachu"/>
                </div>
                <div className='footer__container'>
                    <div className='footer__links-group'>
                       <div className='footer__link'>
                           <Link to={'/'} className='link'>PokeLink</Link>
                       </div>
                        <div className='footer__link'>
                            <Link to={'/'} className='link'>PokeLink</Link>
                        </div>
                        <div className='footer__link'>
                            <Link to={'/'} className='link'>PokeLink</Link>
                        </div>
                        <div className='footer__link'>
                            <Link to={'/'} className='link'>PokeLink</Link>
                        </div>
                    </div>
                    <div className='footer__links-group'>
                        <div className='footer__link'>
                            <Link to={'/'} className='link'>PokeLink</Link>
                        </div>
                        <div className='footer__link'>
                            <Link to={'/'} className='link'>PokeLink</Link>
                        </div>
                        <div className='footer__link'>
                            <Link to={'/'} className='link'>PokeLink</Link>
                        </div>
                        <div className='footer__link'>
                            <Link to={'/'} className='link'>PokeLink</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__line'>
                <div className='footer__copyright'>
                    <p className='text'>©2020 Copyright Text</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
