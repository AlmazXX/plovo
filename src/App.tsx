import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;