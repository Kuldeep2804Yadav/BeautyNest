import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Reviews from "./Pages/Review";
import Header from "./component/Header";
import ProductPage from "./Pages/ProductPage";
import Auth from "./component/auth/Auth";
import ProtectedRoute from "./component/auth/ProtecedRoutes"; // Ensure it's correctly named
import UserProfile from "./Pages/UserProfile";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProtectedRoute>
        <Header />
      </ProtectedRoute>
      <div className="flex-grow">
        <Routes>
          {/* Public Route */}
          <Route path="/auth" element={<Auth />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/:productName"
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reviews"
            element={
              <ProtectedRoute>
                <Reviews />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:categoryName"
            element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <ProtectedRoute>
        <Footer />
      </ProtectedRoute>
    </div>
  );
};

export default App;
