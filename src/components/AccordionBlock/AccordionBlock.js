import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Goods from "../../containers/Checkout/Goods/Goods";
import data from "../../containers/Checkout/CheckoutData"

const AccordionBlock = () => {

    return (
        <div>
            <Accordion style={{marginBottom: "30px"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Корзина ({data.length})</Typography>
                </AccordionSummary>
                <AccordionDetails>
                        <Goods/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionBlock