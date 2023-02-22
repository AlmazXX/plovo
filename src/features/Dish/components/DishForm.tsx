import { ChangeEvent, useState } from "react";
import { DishMutation } from "../../../types";

const initialState: DishMutation = {
  name: "",
  description: "",
  image: "",
  price: "",
};

const DishForm = () => {
  const [dish, setDish] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDish((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
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
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default DishForm;