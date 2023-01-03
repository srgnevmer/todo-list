import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "60px",
    backgroundColor: theme.colorScheme,
    borderBottom: `1px solid ${
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[8]
    }`,
  },

  menu: {
    width: "115px",
    height: "50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  linkWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "34px",
    height: "34px",
    border: `1px solid ${
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[3]
    }`,
    borderRadius: theme.radius.md,
    backgroundColor: `${
      theme.colorScheme === "light" ? theme.white : theme.colors.dark[5]
    }`,
    transition: "all .2s",

    "&:hover": {
      backgroundColor: `${
        theme.colorScheme === "light"
          ? theme.colors.gray[2]
          : theme.colors.dark[4]
      }`,
    },
  },

  link: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  svg: {
    width: "28px",
    height: "28px",
    fill: `${
      theme.colorScheme === "light" ? theme.colors.dark[9] : theme.white
    }`,
  },
}));
