import React from 'react';
import AccordionBlock from "../../components/AccordionBlock/AccordionBlock";
import "./Checkout.scss"
import Goods from "./Goods/Goods";

const Checkout = () => {

    return (
        <div className="checkout container">
            <h1 className="checkout__title">Оформление заказа</h1>
            <div className="checkout__basket">
                <AccordionBlock count="3" content={Goods}/>
                <div></div>
            </div>
        </div>
    );
};

export default Checkout;