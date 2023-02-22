import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import DishItem from "./components/DishItem";
import {
  selectDishDeleting,
  selectDishes,
  selectDishesFetching,
} from "./dishesSlice";
import { deleteDish, fetchDishes } from "./dishesThunk";

const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const fetching = useAppSelector(selectDishesFetching);
  const deleting = useAppSelector(selectDishDeleting);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const onDelete = async (id: string) => {
    if (window.confirm("Do you really want to delete this dish?")) {
      await dispatch(deleteDish(id));
      await dispatch(fetchDishes());
    }
  };

  return (
    <>
      <h4>Dishes</h4>
      {fetching ? (
        <Spinner />
      ) : (
        dishes.map((dish) => (
          <DishItem
            key={dish.id}
            dish={dish}
            deleting={deleting === dish.id}
            onDelete={() => onDelete(dish.id)}
          />
        ))
      )}
    </>
  );
};

export default Dishes;