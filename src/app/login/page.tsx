import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className="text-page-title">GRahub</h1>
          <p className="text-description">Login to manage your community</p>
        </div>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email or NIK</label>
            <input type="text" id="email" placeholder="Enter your email or NIK" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  );
}
