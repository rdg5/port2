import styles from "./styles/LandingPage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>CityTransit</span>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <button className={styles.signInButton}>Sign In</button>
        </div>
      </nav>
      <header className={styles.hero}>
        <h1>Travel Smart, Travel Fast</h1>
        <p>
          Experience the best in city transportation. Reliable, timely, and
          comfortable.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </header>
    </div>
  );
}
