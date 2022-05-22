import styled from "styled-components";
import { mobile } from '../../responsive';


export const Container = styled.div`
  height: 80px;
  background: white;

  ${mobile({
    height: "50px"
  })};
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px"
  })};
`;

export const Left = styled.div`
  color: black;
  font-size: var(--fs-medium);
  flex: 1;
  left:0;
  font-size: 1em;
  padding-left: 0;

  ${mobile({
    display: "none"
  })}

  ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }

  li{
    flex: 1;
    margin: 0 auto;
    padding: 10px 20px;
    text-align:center;
    overflow: visible;
    cursor: pointer;

    :hover{
      color: var(--clr-tan);
      transform: scale(1.3);
    }
  }

  .item1{
    border-right: 2px solid black;
    border-left: 2px solid black;
  }

  .item3{
    border-right: 2px solid black;
    border-left: 2px solid black;
  }
`;

export const Center = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2em;
  ${mobile({
    fontSize: "24px"
  })}
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  flex: 1;
  padding-right: 0;

  ${mobile({
    justifyContent: "center",
    flex: "2",
    display: "none"
  })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

