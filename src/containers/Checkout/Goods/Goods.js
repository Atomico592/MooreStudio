import React, {useState} from 'react';
import data from "../CheckoutData"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./Goods.scss"

const Goods = () => {
    const [state, setState] = useState(data)
    let totalPrice = 0;

   const  a = state.map(item => {
        return item.price
    })
    for (let i = 0; i < a.length; i++) {
        totalPrice += a[i]
    }
    return (
        <div style={{display: "flex", justifyContent: "space-between", position: "relative"}}>
            <div>
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Фото</TableCell>
                        <TableCell align="right">Название</TableCell>
                        <TableCell align="right">Артикул</TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Цена</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map(item => (
                        <TableRow
                            key={item.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={item.image} alt={item.name}/>
                            </TableCell>
                            <TableCell align="right">{item.name}</TableCell>
                            <TableCell align="right">{item.artic}</TableCell>
                            <TableCell align="right"><span style={{background: "#F7F7F7", borderRadius: "5px", padding: "5px"}}>+ 0 -</span></TableCell>
                            <TableCell align="right">{item.price}c</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
                </div>
                <div className="inner-blocks__price-order" style={{position: "fixed", right: "183px", top: "156px"}}>
                    <h3 className="order-checkout__title">Стоимость заказа</h3>
                    <p style={{display: "flex", justifyContent: "space-between", fontSize: "15px", color: "#333333"}}>Товары ({state.length}) <span>{totalPrice} c</span></p>
                    <p style={{display: "flex", justifyContent: "space-between", fontSize: "15px", color: "#333333"}}>Доставка  <span>Бесплатно</span></p>
                    <hr/>
                    <p style={{display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: "bold"}}>Итого <span style={{color: "#EA5A5A"}}>{totalPrice} c</span></p>
                    <div style={{textAlign: "center"}}>
                    <button className="button">Подтвердить заказ</button>
                    <p style={{textAlign: "center", width: "332px", paddingLeft: "47 px"}}>Подтверждая заказ, я принимаю условия  <span className="agreement">пользовательского соглашения</span></p>
                    </div>
                </div>
        </div>
    );
};

export default Goods;
