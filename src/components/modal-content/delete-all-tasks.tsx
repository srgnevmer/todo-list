import { FC, useContext } from "react";
import { createStyles, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { deleteDoc } from "firebase/firestore";
import { TODOS_REF } from "../../constants";
import { ModalContext } from "../../context";
import { ModalContext as IModalContext } from "../../types";

const useStyles = createStyles(() => ({
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "26px",
    fontWeight: 600,
    margin: "0 0 20px",
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

export const DeleteAllTasks: FC = () => {
  const { classes } = useStyles();
  const { closeModal } = useContext<Partial<IModalContext>>(ModalContext);

  const deleteAllTasks = () => {
    deleteDoc(TODOS_REF);

    showNotification({
      color: "green",
      disallowClose: true,
      message: "All tasks were successfully deleted",
      styles: (theme) => ({
        description: {
          color: `${theme.colorScheme === "light" ? theme.black : theme.white}`,
          fontSize: "18px",
          fontWeight: "bold",
        },
      }),
    });

    closeModal?.();
  };

  return (
    <>
      <p className={classes.text}>
        <span>All tasks will be deleted</span>
        <span>Are you sure you want that?</span>
      </p>
      <div className={classes.wrapper}>
        <div className={classes.buttons}>
          <Button uppercase color="green" size="md" onClick={deleteAllTasks}>
            delete
          </Button>
          <Button uppercase color="red" size="md" onClick={closeModal}>
            cancel
          </Button>
        </div>
      </div>
    </>
  );
};
