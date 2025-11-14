import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.warning("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Please enter password");
    } else {
      const url = "http://localhost:4000/user/login";
      const body = { email, password };
      try {
        const res = await axios.post(url, body);

        if (res.data.status === "success") {
          toast.success("Login successful");
          const { token, firstName, lastName } = res.data.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify({ firstName, lastName }));
          setUser({
            firstName: firstName,
            lastName: lastName,
          });

          navigate("/home");
        } else {
          toast.error(res.data.error);
        }
      } catch (error) {
        toast.error("An error occurred during login.");
      }
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>

          <div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="mt-4">
              <button onClick={onLogin} className="btn btn-success w-100">
                Login
              </button>
            </div>
          </div>

          <div className="mt-3 text-center">
            Don't have an account? <a href="/signup">SignUp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
