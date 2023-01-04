import { FC } from "react";
import { useStyles } from "./styles";
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Layout, Header, Main } from "../../ui";

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
        <Layout>
          <div className={classes.container}>
            <Header />
            <Main />
          </div>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
