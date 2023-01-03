import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  switch: {
    cursor: "pointer",
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

  svg: {
    width: "28px",
    height: "28px",
    stroke: `${
      theme.colorScheme === "light" ? theme.colors.dark[9] : theme.white
    }`,
  },
}));
