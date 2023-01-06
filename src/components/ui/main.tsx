import { FC, useState, useEffect, useContext } from "react";
import { createStyles, Text, Button, ActionIcon } from "@mantine/core";
import { onSnapshot } from "firebase/firestore";
import { AddTask } from "../modal-content";
import { PriorityBadge, CategoryBadge } from "../../components";
import { TODOS_REF } from "../../constants";
import { ModalContext } from "../../context";
import { getCurrentDate, formatDate } from "../../utils";
import { Task, ModalContext as IModalContext } from "../../types";

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

export const Main: FC = () => {
  const { classes } = useStyles();
  const [tasks, setTasks] = useState<Task[]>([]);
  const { openModal, setContentToModal } =
    useContext<Partial<IModalContext>>(ModalContext);

  const showModal = (): void => {
    setContentToModal?.(<AddTask />);
    openModal?.();
  };

  useEffect(() => {
    onSnapshot(TODOS_REF, (doc) => {
      if (!doc.data()) {
        setTasks([]);
      } else {
        setTasks(doc.data()?.tasks);
      }
    });
  }, []);

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
        <div className={classes.sectionOne}>
          <div className={classes.buttons}>
            <Button uppercase color="green" size="md" onClick={showModal}>
              add task
            </Button>
            <Button uppercase color="red" size="md">
              delete all
            </Button>
          </div>
        </div>
        <ul className={classes.list}>
          {tasks.map(
            ({ id, name, priority, category, isActive, date }: Task) => (
              <li key={id} className={classes.task}>
                <PriorityBadge priority={priority} />
                <div className={classes.mainSection}>
                  <div className={classes.information}>
                    <div className={classes.test}>
                      <div className={classes.testOne}>
                        <p>Status: {isActive ? "complete" : "active"}</p>
                        <p>{formatDate(date)}</p>
                      </div>
                      <div className={classes.testTwo}>
                        <CategoryBadge category={category} />
                      </div>
                    </div>
                    <div className={classes.text}>{name}</div>
                  </div>
                  <div className={classes.manipulation}>
                    <ActionIcon size="lg" variant="filled" color="blue">
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
                    <ActionIcon size="lg" variant="filled" color="red">
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
            )
          )}
        </ul>
      </div>
    </div>
  );
};
