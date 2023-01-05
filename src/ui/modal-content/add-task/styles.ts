import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  marginBottom10: {
    marginBottom: "10px",
  },

  marginBottom20: {
    marginBottom: "20px",
  },

  wrapper: {
    display: "flex",
    justifyContent: "center",
  },

  buttons: {
    width: "270px",
    display: "flex",
    justifyContent: "space-around",
  },
}));
