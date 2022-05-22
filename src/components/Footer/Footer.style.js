import { nominalTypeHack } from 'prop-types';
import styled from 'styled-components';
import { mobile } from '../../responsive';


export const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 730px){
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    display: "none"
  })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover{
    color: teal;
    transform: translateY(-30%);
  }
`;

export const Logo = styled.h1`
  color: black;
  font-size: 2em;

  :hover{
    color: teal;
  }
`;

export const Desc = styled.p`
  margin: 20px 0px;
  color: black;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  :hover{
    transform: scale(1.2);
  }
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items:center ;

`;

export const Payment =styled.div`

`;