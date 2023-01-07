import { FC } from "react";
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { Layout } from "./index";
import { ModalProvider } from "../../context";

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
        <NotificationsProvider position="top-right" limit={3} autoClose={1800}>
          <ModalProvider>
            <Layout>{children}</Layout>
          </ModalProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
