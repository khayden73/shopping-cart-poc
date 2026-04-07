import type { ProductOption, SelectedOption } from "../../lib/types.ts";

interface ProductOptionsProps {
  option: ProductOption | undefined;
  selectedValue: string;
  onChange: (updatedOption: SelectedOption) => void;
}

function ProductOptions({ option, onChange, selectedValue }: ProductOptionsProps) {
  if (!option?.values?.length) {
    return null;
  }

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.info("[ProductOptions][changeHandler]", { event });
    const { id, label } = option;
    onChange({ id, label, value: event.target?.value });
  }

  return (
    <div>
      <label>{option.label}: </label>
      <select value={selectedValue} onChange={changeHandler}>
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
