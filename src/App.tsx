import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateDish from "./features/Dish/CreateDish";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/create-dish" element={<CreateDish/>} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;