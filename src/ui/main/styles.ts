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
    display: "flex",
    flexDirection: "column",
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

  list: {
    flexGrow: 1,
    margin: "0px",
    padding: "10px 5px",
  },

  task: {
    width: "100%",
    height: "56px",
    display: "flex",
    listStyle: "none",
    borderRadius: theme.radius.md,
    backgroundColor: `${
      theme.colorScheme === "light"
        ? theme.colors.gray[2]
        : theme.colors.dark[6]
    }`,
    border: `1px solid ${
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[3]
    }`,

    "&:not(:last-child)": {
      marginBottom: "10px",
    },
  },

  mainSection: {
    display: "flex",
    flexGrow: 1,
    height: "100%",
  },

  information: {
    display: "flex",
    flexGrow: 1,
    height: "100%",
  },

  manipulation: {
    width: "100px",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  test: {
    width: "250px",
    height: "100%",
    display: "flex",
  },

  text: {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    fontSize: "26px",
    fontWeight: 600,
  },

  testOne: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "5px",
    fontSize: "15px",
    fontWeight: 600,

    [`p`]: {
      margin: "0",
    },
  },

  testTwo: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
