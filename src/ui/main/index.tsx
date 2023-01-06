import { FC, useState, useEffect, useContext } from "react";
import { Text, Button } from "@mantine/core";
import { useStyles } from "./styles";
import { getCurrentDate, formatDate } from "../../utils";
import { AddTask } from "../modal-content";
import { ModalContext } from "../../context";
import { Task, ModalContext as IModalContext } from "../../types";
import { onSnapshot } from "firebase/firestore";
import { TODOS_REF } from "../../constants";

import { PriorityBadge, CategoryBadge } from "../../components";

import { ActionIcon } from "@mantine/core";

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
