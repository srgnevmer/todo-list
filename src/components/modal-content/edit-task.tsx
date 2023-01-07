import { FC, useState, useContext, ChangeEvent } from "react";
import { TextInput, Select, Button, createStyles } from "@mantine/core";
import {
  Task,
  Status,
  Priority,
  Category,
  ModalContext as IModalContext,
} from "../../types";
import { ModalContext } from "../../context";
import { getDoc, updateDoc } from "firebase/firestore";
import { TODOS_REF } from "../../constants";
import { showNotification } from "@mantine/notifications";

interface EditTaskProps {
  task: Task;
}

const useStyles = createStyles(() => ({
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

export const EditTask: FC<EditTaskProps> = ({ task }) => {
  const { classes } = useStyles();
  const [taskName, setTaskName] = useState<string>(task.name);
  const [status, setStatus] = useState<string | null>(task.status);
  const [priority, setPriority] = useState<string | null>(task.priority);
  const [category, setCategory] = useState<string | null>(task.category);
  const { closeModal } = useContext<Partial<IModalContext>>(ModalContext);

  const setName = (event: ChangeEvent<HTMLInputElement>): void => {
    setTaskName(event.target.value);
  };

  const saveChanges = async (): Promise<void> => {
    const todosSnap = await getDoc(TODOS_REF);
    const taskList: Task[] = todosSnap.data()?.tasks;
    const indexSelectedTask: number = taskList.findIndex(
      (item: Task) => item.id === task.id
    );

    const updatedTask: Task = {
      id: task.id,
      date: task.date,
      name: taskName,
      status: status as Status,
      priority: priority as Priority,
      category: category as Category,
    };

    taskList.splice(indexSelectedTask, 1, updatedTask);

    updateDoc(TODOS_REF, {
      tasks: taskList,
    });

    showNotification({
      color: "green",
      disallowClose: true,
      message: "The task was successfully updated",
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
      <TextInput
        size="md"
        radius="md"
        value={taskName}
        onChange={setName}
        placeholder="Task name"
        className={classes.marginBottom10}
      />
      <Select
        size="md"
        radius="md"
        value={status}
        onChange={setStatus}
        placeholder="Select a priority"
        className={classes.marginBottom10}
        data={[
          { value: "active", label: "Active" },
          { value: "completed", label: "Completed" },
        ]}
      />
      <Select
        size="md"
        radius="md"
        value={priority}
        onChange={setPriority}
        placeholder="Select a priority"
        className={classes.marginBottom10}
        data={[
          { value: "low", label: "Low" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High" },
        ]}
      />
      <Select
        size="md"
        radius="md"
        value={category}
        onChange={setCategory}
        placeholder="Select a category"
        className={classes.marginBottom20}
        data={[
          { value: "chore", label: "Chore" },
          { value: "learning", label: "Learning" },
          { value: "mind care", label: "Mind care" },
          { value: "body care", label: "Body care" },
        ]}
      />
      <div className={classes.wrapper}>
        <div className={classes.buttons}>
          <Button uppercase color="green" size="md" onClick={saveChanges}>
            edit task
          </Button>
          <Button uppercase color="red" size="md" onClick={closeModal}>
            cancel
          </Button>
        </div>
      </div>
    </>
  );
};
