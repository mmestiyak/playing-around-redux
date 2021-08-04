import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
const Cart = () => {
  const cartItems = useSelector((state) => state.shopping.cart);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let totalItems = 0;
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalItems += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    setTotalCartItems(totalItems);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <Container>
      {totalCartItems ? (
        <Grid style={{ marginTop: '4rem' }} container spacing={10}>
          <Grid xs={12} sm={7} item>
            {cartItems.map((cartItem) => (
              <CartItem xs={12} style={{ width: '100%' }} {...cartItem} />
            ))}
          </Grid>
          <Grid xs={12} sm={5} item>
            <Paper style={{ padding: '1em 1.5em' }} elevation={3}>
              <Typography variant="h4">Cart Summary</Typography>
              <Typography gutterBottom variant="h6">
                Total: ({totalCartItems}) Items: ${totalPrice}
              </Typography>
              <Button variant="outlined" color="primary">
                Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <div
          style={{
            display: 'flex',
            minHeight: '80vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography component="p" variant="h3" color="secondary">
            Empty Cart! Add{' '}
            <Link style={{ textDecoration: 'underline' }} to="/">
              Something
            </Link>
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default Cart;
