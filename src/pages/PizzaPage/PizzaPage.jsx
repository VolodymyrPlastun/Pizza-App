import PizzaList from 'components/PizzaList/PizzaList';
import { useSelector } from 'react-redux';

const PizzaPage = () => {
  const { pizzaArr } = useSelector(state => state.cart);

  return (
    <div>
      <PizzaList ItemsArr={pizzaArr} />
    </div>
  );
};

export default PizzaPage;
