import styles from "../styles/InputField.module.css";

export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  ...props
}) {
  const inputId = `input-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ""}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />

      {error && (
        <p id={errorId} className={styles.errorText}>
          {error}
        </p>
      )}
    </div>
  );
}
