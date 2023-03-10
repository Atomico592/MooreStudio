import React, {useState} from 'react';
import "./NavList.scss"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const NavList = () => {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="nav">
            <div className="dashboard">
                <Button
                    style={{color: "black"}}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Меню
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Каталог</MenuItem>
                    <MenuItem onClick={handleClose}>Акции</MenuItem>
                    <MenuItem onClick={handleClose}>Популярные товары</MenuItem>
                    <MenuItem onClick={handleClose}>Новинки</MenuItem>
                    <MenuItem onClick={handleClose}>О компании</MenuItem>
                    <MenuItem onClick={handleClose}>Контакты</MenuItem>
                </Menu>
            </div>
        <ul className="nav__list">
            <li className="nav__list-li">Каталог</li>
            <li className="nav__list-li">Акции</li>
            <li className="nav__list-li">Популярные товары</li>
            <li className="nav__list-li">Новинки</li>
            <li className="nav__list-li">Новости</li>
            <li className="nav__list-li">О компании</li>
            <li className="nav__list-li">Контакты</li>
        </ul>
            <div className="nav__user-menu">
                <div>
                <i style={{paddingRight: "5px"}}>
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.42979 3.89563L5.42988 3.89553L5.42104 3.88812L1.3757 0.5H11.6036L7.48263 3.88508L7.4692 3.89611L7.45657 3.90804L6.48753 4.82383L5.42979 3.89563ZM0.5 1.07097L4.38339 4.32345L0.5 8.67442V1.07097ZM12.5 1.05778V8.68471L8.52418 4.32364L12.5 1.05778ZM7.77345 4.98448L11.4342 9H1.54979L5.14287 4.97429L6.17021 5.87581L6.51247 6.17617L6.84343 5.8634L7.77345 4.98448Z" stroke="#333333"/>
                </svg>
                </i>
                <span>info@Kanzler.kg</span>
                </div>
                <div className="nav__user-menu-call">
                    <i style={{paddingRight: "5px"}}>
                        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.41679 6.26426C3.93294 6.96183 4.59437 7.53641 5.35464 7.94765L6.55845 7.2245C6.59366 7.20654 6.63342 7.19978 6.67245 7.20513C6.71149 7.21048 6.74796 7.22767 6.77705 7.25444L8.611 8.84072C8.68108 8.89762 8.73705 8.97022 8.7745 9.05281C8.81195 9.13539 8.82984 9.22569 8.82677 9.31656C8.8237 9.40744 8.79975 9.49641 8.75681 9.57645C8.71387 9.65648 8.65311 9.72539 8.57934 9.77772C8.50557 9.83006 7.57015 10.5572 7.50692 10.5899C7.44369 10.6226 7.44369 10.6226 7.28674 10.6988C7.09712 10.7281 6.94104 10.6915 6.7605 10.6267C4.95889 9.98573 3.37358 8.84533 2.18577 7.33588C1.03013 5.81743 0.336591 3.99178 0.189273 2.08037C0.174928 1.89003 0.156664 1.77989 0.176863 1.63464C0.19629 1.48929 0.216612 1.34407 0.306685 1.22327C0.396759 1.10246 1.41521 0.404176 1.41521 0.404176C1.48433 0.349642 1.56474 0.311572 1.6504 0.292818C1.73606 0.274063 1.82476 0.27511 1.90986 0.295879C1.99496 0.316648 2.07425 0.356602 2.14179 0.412748C2.20934 0.468894 2.26339 0.539779 2.2999 0.620093L3.36524 2.81153C3.38404 2.84622 3.39129 2.88613 3.38591 2.92537C3.38054 2.9646 3.36283 3.00109 3.33539 3.02945L2.30546 3.98068C2.50326 4.81619 2.88289 5.59624 3.41679 6.26426Z" fill="#E11E26"/>
                        </svg>
                    </i>
                    <span style={{paddingRight: "5px"}}>Позвонить</span>
                    <i>
                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L3.5 3L6 1" stroke="#E11E26"/>
                    </svg>
                    </i>
                </div>
            </div>
        </div>

    );
};

export default NavList;