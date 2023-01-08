import { FC, useContext } from "react";
import { createStyles, ActionIcon } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { updateDoc, arrayRemove } from "firebase/firestore";
import { formatDate, trimStr } from "../../utils";
import { TODOS_REF } from "../../constants";
import { ModalContext } from "../../context";
import { PriorityBadge, CategoryBadge } from "./index";
import { Task, ModalContext as IModalContext } from "../../types";
import { EditTask } from "../modal-content";

interface ListItemProps {
  item: Task;
}

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "56px",
    display: "flex",
    listStyle: "none",
    userSelect: "none",
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

  main: {
    display: "flex",
    flexGrow: 1,
    height: "100%",
  },

  info: {
    display: "flex",
    flexGrow: 1,
    height: "100%",
  },

  buttons: {
    width: "100px",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  wrapper: {
    width: "250px",
    height: "100%",
    display: "flex",
  },

  taskName: {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: 600,
  },

  statusAndDate: {
    width: "60%",
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

  categoryBadge: {
    width: "40%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const ListItem: FC<ListItemProps> = ({ item }) => {
  const { classes } = useStyles();
  const { id, name, date, status, priority, category } = item;
  const { openModal, setContentToModal } =
    useContext<Partial<IModalContext>>(ModalContext);

  const editTask = (): void => {
    setContentToModal?.(<EditTask task={item} />);
    openModal?.();
  };

  const deleteTask = (): void => {
    updateDoc(TODOS_REF, {
      tasks: arrayRemove(item),
    });

    showNotification({
      color: "green",
      disallowClose: true,
      message: "The task was successfully deleted",
      styles: (theme) => ({
        description: {
          color: `${theme.colorScheme === "light" ? theme.black : theme.white}`,
          fontSize: "18px",
          fontWeight: "bold",
        },
      }),
    });
  };

  return (
    <li key={id} className={classes.container}>
      <PriorityBadge priority={priority} />
      <div className={classes.main}>
        <div className={classes.info}>
          <div className={classes.wrapper}>
            <div className={classes.statusAndDate}>
              <p>Status: {status}</p>
              <p>{formatDate(date)}</p>
            </div>
            <div className={classes.categoryBadge}>
              <CategoryBadge category={category} />
            </div>
          </div>
          <div className={classes.taskName}>{trimStr(name, 20)}</div>
        </div>
        <div className={classes.buttons}>
          <ActionIcon
            size="lg"
            variant="filled"
            color="blue"
            onClick={editTask}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="filled"
            color="red"
            onClick={deleteTask}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </ActionIcon>
        </div>
      </div>
    </li>
  );
};
