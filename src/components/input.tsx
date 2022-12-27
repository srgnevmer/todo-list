import { FC, useState, useEffect, ChangeEvent } from "react";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input: FC<InputProps> = ({ value, placeholder, onChange }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <input
      type="text"
      value={text!}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full max-w-lg text-2xl pl-2 py-1 rounded-lg outline-0
      bg-slate-50 dark:bg-slate-600 border-2 border-slate-400
      dark:text-white ring-2 ring-transparent focus:ring-blue-700"
    />
  );
};
