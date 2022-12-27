import { FC, memo } from "react";

type Type = "button" | "submit";
type Color = "btn-primary" | "btn-success" | "btn-error";

interface ButtonProps {
  text: string;
  type?: Type;
  color: Color;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = memo(
  ({ text, type = "button", color, onClick }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${color}
      px-5 py-2 rounded-md
      text-2xl font-semibold text-white 
      transition-colors duration-100 select-none`}
      >
        {text}
      </button>
    );
  }
);
