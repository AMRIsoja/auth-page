import { useState } from "react";
import InputField from "./InputField";
import { validateSignup } from "../utils/validation";
import styles from "../styles/LoginForm.module.css";

export default function SignupForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });

  // Clear the error message for the field being edited
  if (errors[name]) {
    setErrors({
      ...errors,
      [name]: "",
    });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateSignup(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);

    alert("Account created successfully!");
  };


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Create Account</h2>

      <InputField
        label="Username"
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Enter your username"
        error={errors.username}
      />

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
          placeholder="Create a password"
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

      <div className={styles.passwordWrapper}>
        <InputField
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
        />

        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        >
          {showConfirmPassword ? "Hide" : "Show"}
        </button>
      </div>
      
      <button
        className={styles.submitBtn}
        type="submit"
        disabled={loading}
       >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

    </form>
  );
}
