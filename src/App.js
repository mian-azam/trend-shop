import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Form from "./pages/Form";
import Header from "./components/Header";
import Footer from "./components/Footer"
import './styles/index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Products />}
        >
        </Route>
        <Route
          exact path="/products"
          element={<Products />}
        >
        </Route>
        <Route
          path="/products/:id"
          element={<Details />}
        >

        </Route>
        <Route
          path="/form"
          element={<Form />}
        >

        </Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
