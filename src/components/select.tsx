import { FC, memo, useState, useEffect, ChangeEvent } from "react";
import { Priority, Category } from "../types";
import { getUniqueId, capitalizedFirstLetter } from "../utils";

type ValueType = "default" | Priority | Category;

interface SelectProps {
  value: ValueType;
  options: string[];
  placeholder: string;
  onChange: (value: any) => void;
}

export const Select: FC<SelectProps> = memo(
  ({ value, options, placeholder, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<ValueType>(value);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      onChange(event.target.value);
    };

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    return (
      <select
        value={selectedValue}
        onChange={handleChange}
        className="w-full max-w-lg text-2xl pl-2 py-1 rounded-lg outline-0
      bg-slate-50 dark:bg-slate-600 border-2 border-slate-400
      dark:text-white ring-2 ring-transparent focus:ring-blue-700 cursor-pointer"
      >
        <option value="default" hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={getUniqueId()} value={option}>
            {capitalizedFirstLetter(option)}
          </option>
        ))}
      </select>
    );
  }
);
