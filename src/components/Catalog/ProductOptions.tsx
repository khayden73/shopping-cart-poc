import type { ProductOption } from "../../lib/types.ts";

interface ProductOptionsProps {
  option: ProductOption | undefined;
}

function ProductOptions({ option }: ProductOptionsProps) {
  if (!option?.values?.length) {
    return null;
  }
  return (
    <div>
      <label>{option.label}: </label>
      <select>
        {option.values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ProductOptions };
