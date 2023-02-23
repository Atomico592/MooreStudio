import React from 'react';
import Header from "./containers/Header/Header";
import Checkout from "./containers/Checkout/Checkout";
import Footer from "./containers/Footer/Footer";

const App = () => {
    return (
        <div>
            <Header/>
            <Checkout/>
            <Footer/>
        </div>
    );
};

export default App;