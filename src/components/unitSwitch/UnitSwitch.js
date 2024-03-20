import styles from "./UnitSwitch.module.css";

export const UnitSwitch = ({ onClick, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.switch} ${unitSystem == "fehranheit" ? styles.active : styles.inactive
          }`}
        onClick={onClick}
      >
        fehranheit
      </p>
      <p
        className={`${styles.switch} ${unitSystem == "fehranheit" ? styles.inactive : styles.active
          }`}
        onClick={onClick}
      >
        celsius
      </p>
    </div>
  );
};
