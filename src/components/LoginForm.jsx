import { useState } from "react";
import InputField from "./InputField";
import { validateLogin } from "../utils/validation";
import styles from "../styles/LoginForm.module.css";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateLogin(form);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  setLoading(true);

  await new Promise((resolve) => setTimeout(resolve, 1500));

  setLoading(false);

  alert("Login successful!");
};

/*  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login form is valid!");
    }
  }; */

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login</h2>

      <InputField
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email"
        error={errors.email}
      />

      <div className={styles.passwordWrapper}>
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />

        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button
        className={styles.submitBtn}
        type="submit"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
