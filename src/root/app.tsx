import { FC, useContext } from "react";
import { createStyles, Modal, useMantineTheme } from "@mantine/core";
import { ModalContext } from "../context";
import { Header, Main } from "../components/ui";
import { ModalContext as IModalContext } from "../types";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.colorScheme,
  },
}));

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
