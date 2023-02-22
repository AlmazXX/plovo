import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { clientUrl } from "./constants";
import CreateDish from "./features/Dish/CreateDish";
import UpdateDish from "./features/Dish/UpdateDish";
import Home from "./features/Home/Home";
import NotFound from "./features/NotFound/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={clientUrl} element={<Home />} />
        <Route path={clientUrl + "/create-dish"} element={<CreateDish />} />
        <Route path={clientUrl + "/update-dish/:id"} element={<UpdateDish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;