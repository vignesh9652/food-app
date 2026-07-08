import type { LoginRequest } from "../interfaces/LoginRequest";
import { useForm } from "react-hook-form";
import { serviceLogin } from "../services/AuthService";
import { FiMail, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { register, handleSubmit, reset } = useForm<LoginRequest>();
  const navigate = useNavigate();

  const onSubmitLogics = async (data: LoginRequest) => {
    try {
      const response = await serviceLogin(data);
      toast.success("Login Success!");
      console.log(response);
      reset();
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Login Failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to your FreshMart account to start shopping!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmitLogics)} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-icon-wrapper">
              <FiMail className="input-icon" />
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-icon-wrapper">
              <FiLock className="input-icon" />
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/register">Create one here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
