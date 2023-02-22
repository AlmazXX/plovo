import { FC } from "react";
import { Link } from "react-router-dom";
import { ApiDish } from "../../../types";

interface Props {
  dish: ApiDish;
}
const DishItem: FC<Props> = ({ dish }) => {
  const imageUrl =
    "https://img5.lalafo.com/i/posters/original/a8/86/70/08dc19d74138e3fa3b8b56a939.jpeg";
  const image = dish.image || imageUrl;
  const imageStyle = {
    background: `url("${image}") no-repeat center center / cover`,
  };

  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start" style={imageStyle} />
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <p className="card-text small">{dish.description}</p>
            <p className="card-text">{dish.price} KGS</p>
            <p className="d-flex gap-2">
              <button className="btn btn-success">Add</button>
              <Link to={`/edit-dish/${dish.id}`} className="btn btn-primary">
                Edit
              </Link>
              <button className="btn btn-danger">Delete</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishItem;