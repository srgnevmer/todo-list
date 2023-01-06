import { FC } from "react";
import { createStyles } from "@mantine/core";
import { Priority } from "../types";

interface PriorityBadgeProps {
  priority: Priority;
}

const useStyles = createStyles((theme, { priority }: PriorityBadgeProps) => ({
  container: {
    width: "12px",
    height: "100%",
    backgroundColor:
      priority === "low"
        ? theme.colors.green[8]
        : priority === "medium"
        ? theme.colors.orange[8]
        : theme.colors.red[8],
    borderTopLeftRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
  },
}));

export const PriorityBadge: FC<PriorityBadgeProps> = ({ priority }) => {
  const { classes } = useStyles({ priority });

  return <div className={classes.container}></div>;
};
