import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div>
        <h3>Login</h3>
      </div>
      <div class="form-floating mb-3">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div className="mt-2">
        <button className="btn btn-success">Login</button>
      </div>
    </div>
  );
}

export default Login;
