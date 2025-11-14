import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePass() {
  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPassword, setConfirmNewPass] = useState("");
  const navigate = useNavigate();
  const onChangePassword = async () => {
    if (currPass.length == 0) {
      toast.warning("Please enter password");
    } else if (newPass.length == 0) {
      toast.warning("Please enter new password");
    } else if (confirmNewPassword.length == 0) {
      toast.warning("Please enter correct new password");
    } else if (newPass != confirmNewPassword) {
      toast.warning("Password dosent match");
    } else {
      const url = "http://localhost:4000/user/changePassword";
      const body = { currPass, newPass };
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const res = await axios.put(url, body, { headers });
        if (res.data["status"] == "success") {
          toast.success("Password changed successfully");
          navigate("/home");
        } else {
          toast.error(res.data["error"]);
        }
      } catch {
        toast.error("An error occurred while changing password");
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
          <h3 className="card-title text-center mb-4">Change Password</h3>

          <div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setCurrPass(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={currPass}
                required
              />
              <label htmlFor="floatingPassword">Current Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setNewPass(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={newPass}
                required
              />
              <label htmlFor="floatingPassword">New Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => setConfirmNewPass(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={confirmNewPassword}
                required
              />
              <label htmlFor="floatingPassword">Confirm New Password</label>
            </div>

            <div className="mt-4">
              <button
                onClick={onChangePassword}
                className="btn btn-success w-100"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;
