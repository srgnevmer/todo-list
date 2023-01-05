import { FC } from "react";
import { useStyles } from "./styles";
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useLocalStorage } from "@mantine/hooks";
import { Layout, Header, Main } from "../../ui";
import {
  MAX_NUMBER_OF_NOTICE,
  TIME_BEFORE_NOTICE_CLOSES,
} from "../../constants";

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
        <NotificationsProvider
          position="top-right"
          limit={MAX_NUMBER_OF_NOTICE}
          autoClose={TIME_BEFORE_NOTICE_CLOSES}
        >
          <Layout>
            <div className={classes.container}>
              <Header />
              <Main />
            </div>
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
