import { FC } from "react";
import { createStyles } from "@mantine/core";
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Header } from "../ui";

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.colorScheme,
  },
}));

export const App: FC = () => {
  const { classes } = useStyles();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        <div className={classes.container}>
          <Header />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
