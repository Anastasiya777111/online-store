import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

import {Context} from "../../index";

import {Container, Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../../utils/consts";
import TrueAuth from "./present-components/trueAuth";
import FalseAuth from "./present-components/falseAuth";

const NavBar = observer(() => {
    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>e-Store</NavLink>
                {user.isAuth ? <TrueAuth/> : <FalseAuth/>}
            </Container>
        </Navbar>
    );
});

export default NavBar;