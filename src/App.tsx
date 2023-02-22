import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateDish from "./features/Dish/CreateDish";
import UpdateDish from "./features/Dish/UpdateDish";
import NotFound from "./features/NotFound/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/create-dish" element={<CreateDish />} />
        <Route path="/update-dish/:id" element={<UpdateDish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;