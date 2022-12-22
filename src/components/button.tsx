import { FC, memo } from "react";

type Color = "btn-primary" | "btn-success" | "btn-error";

interface ButtonProps {
  text: string;
  color: Color;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = memo(({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color}
      px-5 py-2 rounded-md
      text-2xl font-semibold text-white 
      transition-colors duration-100`}
    >
      {text}
    </button>
  );
});
