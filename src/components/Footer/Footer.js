import React from 'react'
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, Mail } from '@material-ui/icons';

import { Container, Left, Right, Center, SocialContainer, SocialIcon, Desc, Logo, Title, List, ListItem, ContactItem, Payment } from './Footer.style';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          TATTY TUN
        </Logo>
        <Desc>
          Лучшие пижамы
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Полезные ссылки</Title>
        <List>
          <ListItem>Главная</ListItem>
          <ListItem>Корзина</ListItem>
          <ListItem>Мужская мода</ListItem>
          <ListItem>Женская мода</ListItem>
          <ListItem>Детская мода</ListItem>
          <ListItem>Мой аккаунт</ListItem>
          <ListItem>Отслежка заказа</ListItem>
          <ListItem>Список желаний</ListItem>
          <ListItem>Правила</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          Контакты
          <ContactItem>
            <Room style={{marginRight:"10px"}}/>Актобе, Казахстан
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/>+7(778)4361610
          </ContactItem>
          <ContactItem>
            <Mail style={{marginRight:"10px"}}/>dattebayokz@gmail.com  
          </ContactItem>
          <Payment src="https://help.zazzle.com/hc/article_attachments/360023193074/payment_Capture.JPG"/>
        </Title>
      </Right>
    </Container>
  )
}

export default Footer
