import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 0",
  },

  header: {
    userSelect: "none",
    width: "400px",
    padding: "8px",
    marginBottom: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    border: `1px solid ${
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[3]
    }`,
    borderRadius: theme.radius.md,
    backgroundColor: `${
      theme.colorScheme === "light"
        ? theme.colors.gray[1]
        : theme.colors.dark[5]
    }`,
  },

  main: {
    width: "800px",
    height: "600px",
    border: `1px solid ${
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[3]
    }`,
    borderRadius: theme.radius.md,
    backgroundColor: `${
      theme.colorScheme === "light"
        ? theme.colors.gray[1]
        : theme.colors.dark[5]
    }`,
  },

  sectionOne: {
    width: "100%",
    height: "60px",
    borderBottom: `1px solid ${
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[3]
    }`,
    display: "flex",
    alignItems: "center",
  },

  buttons: {
    width: "270px",
    display: "flex",
    justifyContent: "space-around",
  },
}));
