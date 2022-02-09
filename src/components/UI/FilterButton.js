import styles from "./FilterButton.module.css";

const FilterButton = ({ button, filter, activeButton }) => {
  return (
    <div className={`${"centered"} ${styles.filter}`}>
      {button.map((category, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={() => filter(category)}
            className={`${styles["filter-btn"]} ${
              category === activeButton && styles.active
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButton;
