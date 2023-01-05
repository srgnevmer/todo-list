import { FC } from "react";
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { Layout } from "../ui";
import { ModalProvider } from "../context";
import { MAX_NUMBER_OF_NOTICE, TIME_BEFORE_NOTICE_CLOSES } from "../constants";

interface ProviderProps {
  children: JSX.Element;
}

export const Provider: FC<ProviderProps> = ({ children }) => {
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
          <ModalProvider>
            <Layout>{children}</Layout>
          </ModalProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
