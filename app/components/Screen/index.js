 

import React from 'react';
import styled from 'styled-components';

const Screen= (props) => {
    return <figure className="screen-container"><img src={props.img} alt="" className="screens"/></figure>
}

export default Screen;