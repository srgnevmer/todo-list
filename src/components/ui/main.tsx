import { FC, useState, useEffect, useContext } from "react";
import { createStyles, Text, Button, Select } from "@mantine/core";
import { onSnapshot } from "firebase/firestore";
import { ListItem } from "./index";
import { TODOS_REF } from "../../constants";
import { ModalContext } from "../../context";
import { getCurrentDate, sortTasks } from "../../utils";
import { AddTask, DeleteAllTasks } from "../modal-content";
import { Task, SortType, ModalContext as IModalContext } from "../../types";

const useStyles = createStyles((theme) => ({
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

  wrapper: {
    width: "100%",
    height: "60px",
    borderBottom: `1px solid ${
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[3]
    }`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttons: {
    width: "280px",
    display: "flex",
    justifyContent: "space-around",
  },

  test: {
    width: "270px",
    display: "flex",
    justifyContent: "space-around",
  },

  list: {
    flexGrow: 1,
    margin: "0px",
    padding: "10px 5px",
    overflowY: "auto",
  },
}));

export const Main: FC = () => {
  const { classes } = useStyles();
  const [tasks, setTasks] = useState<Task[]>([]);
  const { openModal, setContentToModal } =
    useContext<Partial<IModalContext>>(ModalContext);
  const [sortType, setSortType] = useState<string | null>("default");

  const addTask = (): void => {
    setContentToModal?.(<AddTask />);
    openModal?.();
  };

  const deleteAllTasks = (): void => {
    setContentToModal?.(<DeleteAllTasks />);
    openModal?.();
  };

  useEffect(() => {
    onSnapshot(TODOS_REF, (doc) => {
      if (!doc.data()) {
        setTasks([]);
      } else {
        const listTasks: Task[] = doc.data()?.tasks;
        setTasks(sortTasks(sortType as SortType, listTasks));
      }
    });
  }, [sortType]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Text size={32} weight={600}>
          {getCurrentDate()}
        </Text>
        <Text size={30} weight={600}>
          Organize work and life!
        </Text>
      </div>
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <div className={classes.buttons}>
            <Button uppercase color="green" size="md" onClick={addTask}>
              add task
            </Button>
            <Button uppercase color="red" size="md" onClick={deleteAllTasks}>
              delete all
            </Button>
          </div>
          <div className={classes.test}>
            <Select
              size="md"
              value={sortType}
              onChange={setSortType}
              placeholder="Sorting tasks"
              data={[
                {
                  value: "default",
                  label: "Default",
                },
                { value: "high", label: "From high to low" },
                { value: "low", label: "From low to high" },
                { value: "active", label: "First the active" },
                { value: "completed", label: "First the completed" },
              ]}
            />
          </div>
        </div>
        <ul className={classes.list}>
          {tasks.map((task: Task) => (
            <ListItem key={task.id} item={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};
