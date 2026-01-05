import styles from "./IosBrowserFrame.module.css";

export default function IosBrowserFrame({
  url = "https://example.com",
  children,
}) {
  return (
    <div className={styles.browser}>
      <div className={styles.topBar}>
        <div className={styles.controls}>
          <span className={`${styles.dot} ${styles.red}`}></span>
          <span className={`${styles.dot} ${styles.yellow}`}></span>
          <span className={`${styles.dot} ${styles.green}`}></span>
        </div>
        <div className={styles.addressBar}>{url}</div>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
