import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useForm } from "react-hook-form";
import { servieRegister } from "../services/AuthService";
import { FiUser, FiMail, FiPhone, FiLock, FiShield } from "react-icons/fi";
import "./Register.css";

export default function Register() {
  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

  const onSubmitLogics = async (data: RegisterRequest) => {
    try {
      const response = await servieRegister(data);
      alert("Registration Success");
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2>Create Account</h2>
          <p>Join FreshMart today to enjoy daily fresh grocery deliveries!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmitLogics)} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <div className="input-icon-wrapper">
              <FiUser className="input-icon" />
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="Enter username"
                required
              />
            </div>
          </div>

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
            <label htmlFor="phone">Phone Number</label>
            <div className="input-icon-wrapper">
              <FiPhone className="input-icon" />
              <input
                id="phone"
                type="number"
                {...register("phone")}
                placeholder="Enter phone number"
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

          <div className="form-group">
            <label htmlFor="role">Account Type</label>
            <div className="input-icon-wrapper">
              <FiShield className="input-icon" />
              <select id="role" {...register("role")}>
                <option value="ROLE_CUSTOMER">Customer</option>
                <option value="ROLE_ADMIN">Admin</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}