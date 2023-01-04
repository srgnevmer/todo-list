import { createStyles } from "@mantine/core";

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
