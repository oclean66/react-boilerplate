 

import React from 'react';
import styled from 'styled-components';
import ScreenImage from '../../images/screen.png';

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px; 
`;

const Screen= () => {
    return <img src={ScreenImage}/>
}

export default Screen;