import CartPage from 'pages/CartPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { calculateTotal } from 'redux/features/cart/cartSlice';
import PizzaPage from '../pages/PizzaPage';
import Layout from './Layout';

export const App = () => {
  const { pizzaArr } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, pizzaArr]);
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PizzaPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
};
