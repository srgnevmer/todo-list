import { FC } from "react";
import { createStyles, useMantineColorScheme } from "@mantine/core";

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

export const ToggleTheme: FC = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div onClick={() => toggleColorScheme()} className={classes.switch}>
      {colorScheme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={classes.svg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={classes.svg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </div>
  );
};
