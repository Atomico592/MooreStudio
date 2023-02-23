import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {inputChangeHandler} from "../../components/UI/Form/Handlers/Handlers";
import "./OrderCheckout.scss"
import RadioGroup, {useRadioGroup} from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel, {FormControlLabelProps} from "@mui/material/FormControlLabel";
import {styled} from "@mui/material/styles";

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
        })
    console.log(state)
    return (
        <>
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

            <div className="iam">
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
        </>
    );
};


export default OrderCheckout;