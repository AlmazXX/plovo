import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import BtnSpinner from "../../../components/Spinner/BtnSpinner";
import { Dish, DishMutation } from "../../../types";
import { selectDishCreating } from "../dishesSlice";

interface Props {
  existingDish?: DishMutation;
  onSubmit: (dish: Dish) => void;
}

const initialState: DishMutation = {
  name: "",
  description: "",
  image: "",
  price: "",
};

const DishForm: FC<Props> = ({ existingDish = initialState, onSubmit }) => {
  const creating = useAppSelector(selectDishCreating);
  const [dish, setDish] = useState(existingDish);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDish((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit({ ...dish, price: parseFloat(dish.price) });
    setDish(initialState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={dish.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={dish.description}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          className="form-control"
          id="image"
          name="image"
          value={dish.image}
          onChange={onChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={dish.price}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={creating}>
        {creating && <BtnSpinner />}Submit
      </button>
    </form>
  );
};

export default DishForm;