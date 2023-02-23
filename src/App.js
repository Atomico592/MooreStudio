import React from 'react';
import Header from "./containers/Header/Header";
import Checkout from "./containers/Checkout/Checkout";
import Footer from "./containers/Footer/Footer";
import SearchBlock from "./containers/SearchBlock/SearchBlock";

const App = () => {
    return (
        <div>
            <Header/>
            <SearchBlock/>
            <Checkout/>
            <Footer/>
        </div>
    );
};

export default App;