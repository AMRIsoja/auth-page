import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import styles from "../styles/AuthPage.module.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.toggle}>
          <button
            className={isLogin ? styles.active : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? styles.active : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        <div
          key={isLogin ? "login" : "signup"}
          className={styles.formWrapper}
        >
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}
