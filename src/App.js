//Libraries
import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
//Global styles
import { GlobalStyle } from './GlobalStyle'
//Components
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import ProductList from './pages/ProductList/ProductList'
import Success from './pages/Success/Success';


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <SingleProductPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
