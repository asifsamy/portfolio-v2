import styles from "./FilterButton.module.css";

const FilterButton: React.FC<{
  button: string[];
  filter: (category: string) => void;
  activeButton: string;
}> = (props) => {
  return (
    <div className={`${"centered"} ${styles.filter}`}>
      {props.button.map((category, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={() => props.filter(category)}
            className={`${styles["filter-btn"]} ${
              category === props.activeButton && styles.active
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
