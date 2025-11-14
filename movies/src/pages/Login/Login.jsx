import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const onLogin = async () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const url = "http://localhost:4000/user/login";
      const body = { email, password };
      const res = await axios.post(url, body);
      if (res.data["status"] == "success") {
        toast.success("Login successful");
        localStorage.setItem("token", res.data["data"]["token"]);
        setUser({
          firstName: res.data["data"]["firstName"],
          lastName: res.data["data"]["lastName"],
        });

        navigate("/home");
      } else {
        toast.error(res.data["error"]);
      }
    }

    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Login</h3>

            <form onSubmit={handleSubmit}>
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
                <button
                  onClick={() => onLogin()}
                  className="btn btn-success w-100"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-3 text-center">
              Don't have an account? <a href="/signup">SignUp</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Login;
