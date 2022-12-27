import { FC, useState, useEffect, ChangeEvent } from "react";
import { getUniqueId, capitalizedFirstLetter } from "../utils";
import { Priority, Category } from "../types";

// TODO: need to change this type
type Test = "default" | Priority | Category;

interface SelectProps {
  value: Test;
  options: string[];
  placeholder: string;
  onChange: (value: any) => void;
}

export const Select: FC<SelectProps> = ({
  value,
  options,
  placeholder,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<Test>(value);

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
};
