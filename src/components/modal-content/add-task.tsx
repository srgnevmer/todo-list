import { FC, useState, useContext, ChangeEvent } from "react";
import { TextInput, Select, Button, createStyles } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { v4 as uuidv4 } from "uuid";
import { getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import {
  Task,
  Priority,
  Category,
  ModalContext as IModalContext,
} from "../../types";
import { ModalContext } from "../../context";
import { TODOS_REF } from "../../constants";

const useStyles = createStyles((theme) => ({
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

export const AddTask: FC = () => {
  const { classes } = useStyles();
  const [taskName, setTaskName] = useState<string>("");
  const [priority, setPriority] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const { closeModal } = useContext<Partial<IModalContext>>(ModalContext);

  const setName = (event: ChangeEvent<HTMLInputElement>): void => {
    setTaskName(event.target.value);
  };

  const saveTask = async (): Promise<void> => {
    if (!taskName.trim() || !priority || !category) {
      showNotification({
        color: "red",
        disallowClose: true,
        message: "Please fill in all fields",
        styles: (theme) => ({
          description: {
            color: `${
              theme.colorScheme === "light" ? theme.black : theme.white
            }`,
            fontSize: "18px",
            fontWeight: "bold",
          },
        }),
      });
      return;
    }

    const task: Task = {
      id: uuidv4(),
      name: taskName,
      isActive: false,
      date: new Date().getTime(),
      priority: priority as Priority,
      category: category as Category,
    };

    const todosSnap = await getDoc(TODOS_REF);
    if (todosSnap.exists()) {
      updateDoc(TODOS_REF, {
        tasks: arrayUnion(task),
      });
    } else {
      setDoc(TODOS_REF, {
        tasks: [task],
      });
    }

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
          <Button
            color="green"
            size="md"
            uppercase
            type="submit"
            onClick={saveTask}
          >
            add task
          </Button>
          <Button color="red" size="md" uppercase onClick={closeModal}>
            cancel
          </Button>
        </div>
      </div>
    </>
  );
};
