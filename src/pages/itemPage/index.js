import React from "react";

import './index.scss'
import Header from "../../сomponents/header";
import NavBar from "../../сomponents/navbar";
import Footer from "../../сomponents/footer";
import ItemBody from "../../сomponents/itemBody";

const ItemPage = () => {
    return (
        <div>
            <Header/>
            <NavBar/>
            <ItemBody/>
            <Footer/>
        </div>
    )
};

export default ItemPage;
