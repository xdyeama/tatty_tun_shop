import { StarRate } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { Container, Wrapper, Title, Form, Input, Button, Link, Error } from './Login.style'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder = "username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder = "password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Forgot password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
