import { NavLink } from "react-router-dom";
import { clientUrl } from "../../constants";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">Plovo</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={clientUrl} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={clientUrl + "/create-dish"} className="nav-link">
                Add dish
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={clientUrl + "/orders"} className="nav-link">
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;