import { FC } from "react";
import { useViewportSize } from "@mantine/hooks";
import { useStyles } from "./styles";
import { MIN_WINDOW_WIDTH } from "../../constants";

interface LayoutProps {
  children: JSX.Element;
}

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
