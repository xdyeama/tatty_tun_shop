import React from 'react'
import { Container, Wrapper, Title, Form, Input, Agreement, Button } from './Register.style'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder = "first name" />
          <Input placeholder = "last name" />
          <Input placeholder = "username" />
          <Input placeholder = "email" />
          <Input placeholder = "password" />
          <Input placeholder = "confirm password" />
          <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
