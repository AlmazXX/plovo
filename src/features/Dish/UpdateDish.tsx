import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import { Dish } from "../../types";
import DishForm from "./components/DishForm";
import { selectDish, selectDishesFetching } from "./dishesSlice";
import { fetchOneDish, updateDish } from "./dishesThunk";

const UpdateDish = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const fetchOneLoading = useAppSelector(selectDishesFetching);
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
      {existingDish && (
        <DishForm onSubmit={onSubmit} existingDish={existingDish} />
      )}
    </div>
  );
};

export default UpdateDish;