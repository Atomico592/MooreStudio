import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {inputChangeHandler} from "../../components/UI/Form/Handlers/Handlers";
import RadioGroup, {useRadioGroup} from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel, {FormControlLabelProps} from "@mui/material/FormControlLabel";
import {styled} from "@mui/material/styles";
import "./OrderCheckout.scss"

interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
    <FormControlLabel {...props} />
))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
    },
}));
function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}
const OrderCheckout = () => {
    const [state, setState] = useState(
        {
            name: "",
            lastName: "",
            number: "",
            dob: "",
            email: "",
            secondNumber: "",
            country: "",
            city: "",
            st : "",
            flat: "",
            home: "",
            commentary: ""
        })
    console.log(state)
    return (
        <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
        <div className="order-checkout">
            <h3 className="order-checkout__title">Оформление заказа</h3>
            <div   className="order-checkout__inner-input">
                <div style={{paddingRight: "30px"}}>
                    <TextField
                        style={{marginBottom: "30px"}}
                        className="order-checkout__input"
                        id="outlined-basic"
                        label="Имя"
                        name="name"
                        value={state.name}
                        onChange={e => (inputChangeHandler(e, setState))} />
                    <TextField
                        style={{marginBottom: "30px"}}
                        className="order-checkout__input"
                        id="outlined-basic"
                        label="Телефон"
                        variant="outlined"
                        name="number"
                        value={state.number}
                        onChange={e => (inputChangeHandler(e, setState))} />
                    <TextField
                        className="order-checkout__input"
                        id="outlined-basic"
                        label="Доп телефон или  whatsapp"
                        variant="outlined"
                        value={state.secondNumber}
                        name="secondNumber"
                        onChange={e => (inputChangeHandler(e, setState))} />
                </div>
                <div>
                    <TextField
                        style={{marginBottom: "30px"}}
                        className="order-checkout__input"
                        id="outlined-basic"
                        label="Фамилия" variant="outlined"
                        name="lastName" value={state.lastName}
                        onChange={e => (inputChangeHandler(e, setState))} />
                    <TextField
                        className="order-checkout__input"
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        name="email"
                        value={state.email}
                        onChange={e => (inputChangeHandler(e, setState))} />
                </div>
            </div>
        </div>
            <div className="inner-blocks">
                <h3 className="order-checkout__title">Я</h3>
                <RadioGroup name="use-radio-group" defaultValue="first">
                    <MyFormControlLabel
                        onChange={e => (inputChangeHandler(e, setState))}
                        value="first"
                        label="Я физичекое лицо"
                        control={
                            <Radio
                                sx={{
                                    color: "grey",
                                    '&.Mui-checked': {
                                        color: "red",
                                    },
                                }}
                            />
                        } />
                    <MyFormControlLabel
                        onChange={e => (inputChangeHandler(e, setState))}
                        value="second"
                        label="Я юридическое лицо"
                        control={
                            <Radio
                                sx={{
                                    color: "grey",
                                    '&.Mui-checked': {
                                        color: "red",
                                    },
                                }}
                            />
                        } />
                </RadioGroup>
            </div>
            <div className="inner-blocks">
                <h3 className="order-checkout__title">Доставка</h3>
                <h5 className="order-checkout__subtitle">Способ доставки</h5>
                <RadioGroup name="use-radio-group" defaultValue="third">
                    <MyFormControlLabel
                        onChange={e => (inputChangeHandler(e, setState))}
                        value="third"
                        label="Самовывоз"
                        control={
                            <Radio
                                sx={{
                                    color: "grey",
                                    '&.Mui-checked': {
                                        color: "red",
                                    },
                                }}
                            />
                        }/>
                    <MyFormControlLabel
                        onChange={e => (inputChangeHandler(e, setState))}
                        value="four"
                        label="Курьерская доставка"
                        control={
                            <Radio
                                sx={{
                                    color: "grey",
                                    '&.Mui-checked': {
                                        color: "red",
                                    },
                                }}
                            />
                        } />
                </RadioGroup>
                <h5 className="order-checkout__subtitle" style={{paddingTop: "30px"}}>Адрес доставки</h5>
                <div   className="order-checkout__inner-input">
                    <div style={{paddingRight: "30px"}}>
                        <TextField
                            style={{marginBottom: "30px"}}
                            className="order-checkout__input"
                            id="outlined-basic"
                            label="Страна"
                            name="country"
                            value={state.country}
                            onChange={e => (inputChangeHandler(e, setState))} />
                        <TextField
                            style={{marginBottom: "30px"}}
                            className="order-checkout__input"
                            id="outlined-basic"
                            label="Улица"
                            variant="outlined"
                            name="st"
                            value={state.st}
                            onChange={e => (inputChangeHandler(e, setState))} />
                        <TextField
                            className="order-checkout__input"
                            id="outlined-basic"
                            label="Дом"
                            variant="outlined"
                            value={state.home}
                            name="home"
                            onChange={e => (inputChangeHandler(e, setState))} />
                    </div>
                    <div>
                        <TextField
                            style={{marginBottom: "30px"}}
                            className="order-checkout__input"
                            id="outlined-basic"
                            label="Город"
                            variant="outlined"
                            name="city"
                            value={state.city}
                            onChange={e => (inputChangeHandler(e, setState))} />
                        <TextField
                            className="order-checkout__input"
                            id="outlined-basic"
                            label="Квартира"
                            variant="outlined"
                            name="flat"
                            value={state.flat}
                            onChange={e => (inputChangeHandler(e, setState))} />
                    </div>
                </div>
                <h5 className="order-checkout__subtitle" style={{fontSize: "15px", paddingTop: "30px"}}>Указать домофон, этаж, подъезд и комментарий к адресу
                </h5>
                <TextField
                    style={{marginBottom: "30px"}}
                    className="order-checkout__input-commentary"
                    id="outlined-basic"
                    label="Комментарий"
                    variant="outlined"
                    name="commentary"
                    value={state.commentary}
                    onChange={e => (inputChangeHandler(e, setState))} />
            </div>
        </div>
    );
};


export default OrderCheckout;