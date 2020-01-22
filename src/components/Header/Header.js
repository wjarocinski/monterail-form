import React from 'react';
import {Link} from "react-router-dom";
import { HeaderContainer } from './styledHeader';

const Header = () => {
    return (
        <HeaderContainer><Link to="/">New Event</Link></HeaderContainer>
    );
}
export default Header;