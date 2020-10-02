import React, {Component} from "react";

import './index.scss'
import Header from "../../сomponents/header";
import NavBar from "../../сomponents/navbar";
import Footer from "../../сomponents/footer";
import ItemBody from "../../сomponents/itemBody";

class ItemPage extends Component {

    render() {
        const {pathname} = this.props.location;
        const id = parseInt(pathname.match(/\d+/));
        return (
            <div>
                <Header/>
                <NavBar/>
                <ItemBody itemId={id}/>
                <Footer/>
            </div>
        )
    }
}

export default ItemPage;
