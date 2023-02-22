import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import { Dish } from "../../types";
import DishForm from "./components/DishForm";
import {
  selectDish,
  selectDishesFetching,
  selectDishSubmitting,
} from "./dishesSlice";
import { fetchOneDish, updateDish } from "./dishesThunk";

const UpdateDish = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const fetchOneLoading = useAppSelector(selectDishesFetching);
  const submitting = useAppSelector(selectDishSubmitting);
  const dish = useAppSelector(selectDish);

  useEffect(() => {
    dispatch(fetchOneDish(id));
  }, [id, dispatch]);

  const onSubmit = async (dish: Dish) => {
    await dispatch(updateDish({ id, dish }));
    navigate("/");
  };

  const existingDish = dish && {
    ...dish,
    price: dish.price.toString(),
  };

  return (
    <div className="row mt-2">
      <h4>Edit dish</h4>
      {fetchOneLoading && <Spinner />}
      {existingDish ? (
        <DishForm
          submitting={submitting}
          existingDish={existingDish}
          onSubmit={onSubmit}
        />
      ) : (
        <div className="col">
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default UpdateDish;