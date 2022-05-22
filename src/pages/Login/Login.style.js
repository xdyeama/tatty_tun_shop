import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white; 
  border: 2px solid teal;
  border-radius: 30px;

  ${mobile({
    width: "90%",
  })}
`;

export const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid teal;
  border-radius: 30px;

  :focus{
    background-color: lightgray;
  }
`;

export const Button = styled.button`
  width: 40%;
  border:none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 10px;

  &:disabled{
    color: green;
    cursor:not-allowed;
  }

  :hover{
    background-color: gray;
  }
`;

export const Link = styled.a`
  margin: 4px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Error = styled.span`
  color: red;
`;