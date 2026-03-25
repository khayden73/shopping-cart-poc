import { useState } from "react";
import styles from "./FilterOptions.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import CheckIcon from "@mui/icons-material/Check";
import { Button, Chip } from "@mui/material";

interface CategoryFilterOptionsProps {
  options: string[];
  initial?: string;
  onSelect?: (selected: string) => void;
}

function FilterOptions({
  options,
  initial = "",
  onSelect = () => {},
}: CategoryFilterOptionsProps) {
  const [selected, setSelected] = useState(initial);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option: string) => {
    if (option === selected) {
      setSelected("");
      onSelect?.("");
      return;
    }
    setSelected(option);
    onSelect?.(option);
  };

  return (
    <div className={styles.filterOptionsWrapper}>
      <Button
        aria-label="show filter options"
        onClick={() => setShowOptions(!showOptions)}
      >
        <TuneIcon />
      </Button>
      <section className={styles.optionsList}>
        {showOptions &&
          options.map((option) => (
            <span key={option}>
              <Chip
                icon={option === selected ? <CheckIcon /> : <span></span>}
                color="primary"
                label={option}
                size="small"
                variant="outlined"
                onClick={() => handleOptionClick(option)}
              />
            </span>
          ))}
        {/*<ul>
          {options.map((category) => (
            <li key={category}>
              <button
                className={category === selected ? styles.selected : ""}
                onClick={() => {
                  if (category === selected) {
                    setSelected("");
                    onSelect?.("");
                    return;
                  }
                  setSelected(category);
                  onSelect?.(category);
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>*/}
      </section>
    </div>
  );
}

export { FilterOptions };
