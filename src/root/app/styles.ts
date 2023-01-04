import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.colorScheme,
  },
}));
