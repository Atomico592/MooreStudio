import React, {useState} from 'react';
import Logo from "../../components/UI/Logo/Logo";
import "./SearchBlock.scss"
import newdata from "../Checkout/CheckoutData";
import {inputChangeHandler} from "../../components/UI/Form/Handlers/Handlers";

const SearchBlock = () => {
    const [state, setState] = useState({name: ""})
    const [data, setData] = useState(newdata)
    return (
        <div className="container">
        <div className="search-block" style={{paddingBottom: "50px" }}>
            <Logo/>
            <button className="search-block__catalog"><i><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 2.5C10.5 1.39543 9.60457 0.5 8.5 0.5C7.39543 0.5 6.5 1.39543 6.5 2.5C6.5 3.60457 7.39543 4.5 8.5 4.5C9.60457 4.5 10.5 3.60457 10.5 2.5Z" stroke="#E11E26"/>
                <path d="M4.5 0.5H0.5V4.5H4.5V0.5Z" fill="#E11E26" stroke="#E11E26"/>
                <path d="M4.5 8.5C4.5 7.39543 3.60457 6.5 2.5 6.5C1.39543 6.5 0.5 7.39543 0.5 8.5C0.5 9.60457 1.39543 10.5 2.5 10.5C3.60457 10.5 4.5 9.60457 4.5 8.5Z" fill="#E11E26" stroke="#E11E26"/>
                <path d="M10.5 6.5H6.5V10.5H10.5V6.5Z" fill="#E11E26" stroke="#E11E26"/>
            </svg>
            </i><span style={{color: "red", paddingLeft: "5px"}}>Каталог</span> <i><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#E11E26"/>
            </svg>
            </i></button>
            <input
                className="search-block__panel"
                type="text"
                placeholder="Найти товар"
                name="name"
                value={state.name}
                onChange={e => (inputChangeHandler(e, setState))}

            />
            {state.name != "" ? (<div className="window">{data.map(item => (
                <p style={{paddingLeft: "20px"}}>{item.name} <span>{item.artic}</span> <span>{item.price} c</span></p>
            ))}</div>) : null}
            <button className="btn-style"><svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.75 3.25H1L3.8125 14.5H14.5L16.75 3.25ZM16.75 3.25L17.3125 1H20.6875" stroke="#333333"/>
                <path d="M6.6875 17.3125C6.6875 17.9683 6.15584 18.5 5.5 18.5C4.84416 18.5 4.3125 17.9683 4.3125 17.3125C4.3125 16.6567 4.84416 16.125 5.5 16.125C6.15584 16.125 6.6875 16.6567 6.6875 17.3125Z" stroke="#333333"/>
                <path d="M14 17.3125C14 17.9683 13.4683 18.5 12.8125 18.5C12.1567 18.5 11.625 17.9683 11.625 17.3125C11.625 16.6567 12.1567 16.125 12.8125 16.125C13.4683 16.125 14 16.6567 14 17.3125Z" stroke="#333333"/>
            </svg>
            </button>
            <button className="btn-style"><svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.514026 17.5C0.746109 13.3781 3.82806 10.1923 7.5 10.1923C11.1719 10.1923 14.2539 13.3781 14.486 17.5H7.5H0.514026ZM11.7727 4.84615C11.7727 7.25369 9.85259 9.19231 7.5 9.19231C5.14741 9.19231 3.22727 7.25369 3.22727 4.84615C3.22727 2.43862 5.14741 0.5 7.5 0.5C9.85259 0.5 11.7727 2.43862 11.7727 4.84615Z" stroke="#333333"/>
            </svg>
            </button>
        </div>
            <span style={{color: "#333333", opacity: "0.5"}} className="container">Главная / Корзина / Оформление заказа</span>
        </div>
    );
};

export default SearchBlock;