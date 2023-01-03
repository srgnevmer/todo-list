import { FC, useCallback, useContext } from "react";
import {
  Layout,
  Menu,
  Main,
  Button,
  Modal,
  Alert,
  TaskList,
} from "../components";
import { AddTask } from "../components/modal-content";
import { AlertState } from "../types";
import { ModalContext } from "../context";
import { showModal } from "../redux/slices/modal-slice";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { content, addContentToModal } = useContext(ModalContext)!;
  const isOpenModal = useAppSelector<boolean>((state) => state.modal.isActive);
  const {
    isActive: isOpenAlert,
    type,
    message,
  } = useAppSelector<AlertState>((state) => state.alert);

  const openModal = useCallback(() => {
    dispatch(showModal());
    addContentToModal(<AddTask />);
  }, []);

  return (
    <Layout>
      <>
        <Alert isOpen={isOpenAlert} type={type!} message={message} />
        <Modal isOpen={isOpenModal}>{content!}</Modal>
        <Menu />
        <Main>
          <div className="flex flex-col grow">
            <div className="h-16 border-b-2 shrink-0 border-slate-400">
              <div className="w-80 h-full flex justify-around items-center">
                <Button
                  text="Add a task"
                  color="btn-success"
                  onClick={openModal}
                />
                <Button text="Delete all" color="btn-error" />
              </div>
            </div>
            <TaskList />
          </div>
        </Main>
      </>
    </Layout>
  );
};
