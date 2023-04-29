import PizzaPage from "../pages/PizzaPage";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";


export const App = () => {
  return (
    <div>
      <Routes>
      <Route element={<Layout/>}>

    <Route path="/" element={<PizzaPage/>}/>

      </Route>
</Routes>
    </div>
  );
};
