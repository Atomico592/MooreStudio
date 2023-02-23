import React, {useState} from 'react';
import data from "../CheckoutData"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Goods = () => {
    const [state, setState] = useState(data)
    return (
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
                            <TableCell align="right">asdasd</TableCell>
                            <TableCell align="right">{item.price}c</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Goods;
