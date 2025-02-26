import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Reviews from "./Pages/Review";
import Header from "./component/Header";
import ProductPage from "./Pages/ProductPage";
import Auth from "./component/auth/Auth";
import UserProfile from "./Pages/UserProfile";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
import SearchPage from "./Pages/SearchPage";
import { userIsLogin } from "./store/Slices/authSlice";

const App = () => {
  const isAuthenticated =
    useSelector(userIsLogin) || !!localStorage.getItem("idToken"); // Ensure it's a boolean
console.log(isAuthenticated)
  return (
    <div className="flex flex-col min-h-screen">
      {isAuthenticated && <Header />}{" "}
      <div className="flex-grow">
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/about"
            element={isAuthenticated ? <About /> : <Navigate to="/auth" />}
          />
          <Route
            path="/contact"
            element={isAuthenticated ? <Contact /> : <Navigate to="/auth" />}
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? <UserProfile /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="/search/:productName"
            element={isAuthenticated ? <SearchPage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/reviews"
            element={isAuthenticated ? <Reviews /> : <Navigate to="/auth" />}
          />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart /> : <Navigate to="/auth" />}
          />
          <Route
            path="/:categoryName"
            element={
              isAuthenticated ? <ProductPage /> : <Navigate to="/auth" />
            }
          />
        </Routes>
      </div>
      {isAuthenticated && <Footer />}{" "}
    </div>
  );
};

export default App;
