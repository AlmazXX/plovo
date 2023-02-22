import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import { Dish } from "../../types";
import DishForm from "./components/DishForm";
import { selectDishCreating } from "./dishesSlice";
import { createDish } from "./dishesThunk";

const CreateDish = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const creatingDish = useAppSelector(selectDishCreating);

  const onSubmit = async (dish: Dish) => {
    await dispatch(createDish(dish));
    navigate("/");
  };

  return (
    <div className="row mt-2">
      <div className="col">{creatingDish ? <Spinner /> : <DishForm onSubmit={onSubmit} />}</div>
    </div>
  );
};

export default CreateDish;