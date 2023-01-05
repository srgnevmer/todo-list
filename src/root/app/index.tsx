import { FC, useContext } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import { Header, Main } from "../../ui";
import { ModalContext } from "../../context";
import { ModalContext as IModalContext } from "../../types";

export const App: FC = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { content, isOpenModal, closeModal } =
    useContext<Partial<IModalContext>>(ModalContext);

  return (
    <>
      <Modal
        centered
        radius="md"
        opened={isOpenModal!}
        onClose={closeModal!}
        withCloseButton={false}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        {content}
      </Modal>
      <div className={classes.container}>
        <Header />
        <Main />
      </div>
    </>
  );
};
