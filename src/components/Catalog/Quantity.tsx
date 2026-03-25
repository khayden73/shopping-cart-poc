import styles from "./Quality.module.css";
import { type ChangeEvent } from "react";

interface QuantityProps {
  start?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

function Quantity({ start = 1, max = 10, onChange }: QuantityProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = Number(event.target.value);
    onChange?.(newValue);
  };

  return (
    <>
      <label>Quantity: </label>
      <input
        className={styles.qualityValue}
        type="number"
        min={start}
        max={max}
        defaultValue={start}
        onChange={handleChange}
      />
    </>
  );
}

export { Quantity };
