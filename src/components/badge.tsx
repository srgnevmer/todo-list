import { FC } from "react";
import { Category } from "../types";

interface BadgeProps {
  category: Category;
}

export const Badge: FC<BadgeProps> = ({ category }) => {
  switch (category) {
    case "body care":
      return (
        <span className="bg-red-100 text-red-800 text-sm font-bold px-2.5 py-0.5 rounded">
          {category.toUpperCase()}
        </span>
      );
    case "mind care":
      return (
        <span className="bg-green-100 text-green-800 text-sm font-bold px-2.5 py-0.5 rounded">
          {category.toUpperCase()}
        </span>
      );
    case "chore":
      return (
        <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-2.5 py-0.5 rounded">
          {category.toUpperCase()}
        </span>
      );
    case "learning":
      return (
        <span className="bg-purple-100 text-purple-800 text-sm font-bold px-2.5 py-0.5 rounded">
          {category.toUpperCase()}
        </span>
      );
  }
};
