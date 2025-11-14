import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import ChangePass from "./pages/ChangePassword/ChangePass";
import ThemeProvider from "./Providers/ThemeProvider";
import AuthProvider from "./Providers/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProteectedRoute";
import AllMovies from "./pages/AllMovies/AllMovies";
import MyReviews from "./pages/MyReviews/MyReviews";

function App() {
  return (
    <>
      <div>
        <ThemeProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              >
                <Route
                  path="all-movies"
                  element={
                    <ProtectedRoute>
                      <AllMovies />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="my-reviews"
                  element={
                    <ProtectedRoute>
                      <MyReviews />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="changePass"
                  element={
                    <ProtectedRoute>
                      <ChangePass />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
