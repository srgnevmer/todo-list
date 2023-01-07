import { FC, useState, useEffect } from "react";
import { Badge, DefaultMantineColor } from "@mantine/core";
import { Category } from "../../types";

interface CategoryBadgeProps {
  category: Category;
}

export const CategoryBadge: FC<CategoryBadgeProps> = ({ category }) => {
  const [color, setColor] = useState<DefaultMantineColor>("");

  useEffect(() => {
    if (category === "chore") {
      setColor("blue");
      return;
    }

    if (category === "learning") {
      setColor("grape");
      return;
    }

    if (category === "mind care") {
      setColor("teal");
      return;
    }

    if (category === "body care") {
      setColor("orange");
      return;
    }
  }, [category]);

  return (
    <Badge color={color} size="md" radius="sm" variant="outline">
      {category}
    </Badge>
  );
};
