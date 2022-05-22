//Libraries
import React, { useState } from 'react'
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom'

//Style
import { Center, Container, Wrapper, Left, Right, LogoImg, MenuItem } from './Navbar.style';
import Logo from '../../images/logo.jpg'
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';





const Navbar = () => {
  const [ sideNav, setSideNav ] = useState(false);
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <ul>
            <Link to="/"><li className='item1'>Главная</li></Link>
            <li className='item2'>О нас</li>
            <li className='item3'>Контакты</li>
          </ul>
        </Left>
        <Center>
          TATTY TUN. 
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity}  color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
