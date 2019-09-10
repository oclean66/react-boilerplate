 

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import WePitch from '../../images/logo.png';

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px; 
`;

const Logo= () => {
    return <LogoDiv>
   <Link to="/"> <img src={WePitch}/></Link>
</LogoDiv>
}

export default Logo;