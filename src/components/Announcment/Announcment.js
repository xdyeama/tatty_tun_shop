import React from 'react'
import styled from "styled-components";
import { mobile } from '../../responsive';

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  text-align: center;
  border-bottom: 2px solid black;

  ${mobile({
    display: "none",
    border: "none"
  })}
`;

const Announcment = () => {
  return (
    <Container>
      СУПЕР АКЦИЯ! 2+1! 3 пижамы по цене 2ух.
    </Container>
  )
}

export default Announcment
