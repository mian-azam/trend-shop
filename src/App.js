import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Details from "./pages/Details";
import './styles/index.css';

function App() {
  return (
    <Routes>
      <Route
      path="/"
      element={<Products/>}
      >
      </Route>
      <Route 
      path="/products/:id"
      element={<Details />}
      >

      </Route>
    </Routes>
  );
}

export default App;
