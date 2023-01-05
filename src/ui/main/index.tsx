import { FC, useContext } from "react";
import { Text, Button } from "@mantine/core";
import { useStyles } from "./styles";
import { getCurrentDate } from "../../utils";
import { AddTask } from "../modal-content";
import { ModalContext } from "../../context";
import { ModalContext as IModalContext } from "../../types";

export const Main: FC = () => {
  const { classes } = useStyles();
  const { openModal, setContentToModal } =
    useContext<Partial<IModalContext>>(ModalContext);

  const showModal = (): void => {
    setContentToModal?.(<AddTask />);
    openModal?.();
  };

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
      </div>
    </div>
  );
};
