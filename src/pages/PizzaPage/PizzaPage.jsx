// import products from "../../products";
import {  Grid, Card, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import { Amount, Box, Img, PizzaCard } from "./PizzaPage.styled";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Remove, Add } from "@mui/icons-material";
import { BtnBox } from "./PizzaPage.styled";
import { increase, decrease, onBtnClick } from "redux/features/cart/cartSlice";

const PizzaPage = () => {
const dispatch = useDispatch();

  const {pizzaArr, amount, isBtnClicked} = useSelector(state => state.cart);

console.log(amount);
// console.log(isBtnClicked);
  return (
    <div>
            <Grid container spacing={2}>
      {pizzaArr.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <PizzaCard style={{ height: '100%' }}>
            <Box>
            <CardActionArea>
              <Img 
                component="img"
                image={product.image}
                title={product.title}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="p">
                  {product.price} UAH
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions sx={{display: 'flex', alignItems: 'flex-end'}}>
              
              {!isBtnClicked || amount < 1 ? <><Button onClick={() => dispatch(onBtnClick())} variant="contained" size="small" color="primary">
                Add to cart
              </Button> </>
              : <BtnBox><Button onClick={() => dispatch(decrease(product.id))}><Remove/></Button>
              <Amount>{amount}</Amount>
              <Button onClick={() => {
                dispatch(increase(product.id))
              }}><Add/></Button></BtnBox>}
            </CardActions>
            
            </Box>
          </PizzaCard>
        </Grid>
      ))}
    </Grid>
    </div>
  )
}

export default PizzaPage
