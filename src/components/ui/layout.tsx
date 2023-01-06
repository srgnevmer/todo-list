import { FC } from "react";
import { createStyles } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { MIN_WINDOW_WIDTH } from "../../constants";

interface LayoutProps {
  children: JSX.Element;
}

export const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorScheme,
  },

  text: {
    fontSize: "26px",
    textAlign: "center",
    padding: "0 5px",
    fontWeight: 700,

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: "22px",
    },
  },
}));

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  const { width } = useViewportSize();

  if (MIN_WINDOW_WIDTH > width) {
    return (
      <div className={classes.container}>
        <span className={classes.text}>
          Unfortunately, this window width is not supported
        </span>
      </div>
    );
  }

  return children;
};
