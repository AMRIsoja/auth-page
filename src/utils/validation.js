const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

export function validateLogin(form) {
  const errors = {};

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.password) {
    errors.password = "Password is required.";
  } else if (!passwordRegex.test(form.password)) {
    errors.password =
      "Password must be at least 8 characters, include one uppercase letter and one number.";
  }

  return errors;
}

export function validateSignup(form) {
  const errors = {};

  if (!form.username.trim()) {
    errors.username = "Username is required.";
  } else if (form.username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.password) {
    errors.password = "Password is required.";
  } else if (!passwordRegex.test(form.password)) {
    errors.password =
      "Password must be at least 8 characters, include one uppercase letter and one number.";
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (form.confirmPassword !== form.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}
