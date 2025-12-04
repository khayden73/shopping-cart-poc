import { type ColorOption, SizeOption } from "../../lib/types.ts";

interface ProductOptionsProps {
    label: string;
    options: string[] | ColorOption[] | SizeOption[];
}

function ProductOptions({ options, label }: ProductOptionsProps) {
    return (
        <div>
            <label>{label}: </label>
            <select>
                {options.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>

    )
}

export { ProductOptions };