import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import DishItem from "./components/DishItem";
import { selectDishes, selectDishesFetching } from "./dishesSlice";
import { fetchDishes } from "./dishesThunk";

const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const fetching = useAppSelector(selectDishesFetching);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <>
      <h4>Dishes</h4>
      {fetching ? (
        <Spinner />
      ) : (
        dishes.map((dish) => <DishItem key={dish.id} dish={dish} />)
      )}
    </>
  );
};

export default Dishes;