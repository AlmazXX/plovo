import Dishes from "../Dish/Dishes";

const Home = () => {
  return (
    <div className="row mt-2">
      <div className="col-7">{<Dishes />}</div>
    </div>
  );
};

export default Home;