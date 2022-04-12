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
        <Navbar style={{backgroundColor: "#65829f"}}>
            <Container>
                <NavLink style={{color: "white", fontSize: "24px"}} to={SHOP_ROUTE}>E-STORE</NavLink>
                {user.isAuth ? <TrueAuth/> : <FalseAuth/>}
            </Container>
        </Navbar>
    );
});

export default NavBar;