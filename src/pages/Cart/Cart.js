import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';

import { Container, Wrapper, Title, Top, Bottom, TopButton, TopTexts, TopText, Info, Summary, Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, SummaryItem, SummaryItemText, SummaryItemPrice, SummaryTitle, Button} from './Cart.style';

import Announcment from '../../components/Announcment/Announcment'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Add, Remove } from '@material-ui/icons';
import Tatty_tun from '../../images/logo1.jpg'
import { userRequest } from '../../requestMethods'


const KEY = process.env.STRIPE_KEY;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(()=>{
    const makeRequest = async () => {
      try{
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data})
      }catch{

      }
    }
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history])
  console.log(stripeToken);
  return (
    <Container>
        <Navbar />
        <Announcment />
        <Wrapper>
          <Title>Your cart</Title>
          <Top>
            <TopButton>
              Continue Shopping
            </TopButton>
            <TopTexts>
              <TopText>
                Shopping Bag(2)
              </TopText>
              <TopText>
                WishList
              </TopText>
            </TopTexts>
            <TopButton type="filled">
              Checkout now
            </TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img}/>
                  <Details>
                    <ProductName><b>Product:</b> {product.title}</ProductName>
                    <ProductId><b>ID:</b> {product._id}</ProductId>
                    <ProductColor color={product.color}/>
                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>
                      {product.quantity}
                    </ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice> $ {product.price * product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout 
                name="TATTY TUN"
                image={Tatty_tun}
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total*100}
                token={onToken}
                stripeKey={KEY}></StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
