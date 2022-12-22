import { FC, useCallback, useContext } from "react";
import { Layout, Menu, Main, Button, Modal } from "../components";
import { showModal } from "../redux/slices/modal-slice";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";
import { ModalContext } from "../context";
import { AddTask } from "../components/modal-content";

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { content, addContentToModal } = useContext(ModalContext)!;
  const isOpenModal = useAppSelector<boolean>((state) => state.modal.isActive);

  const openModal = useCallback(() => {
    dispatch(showModal());
    addContentToModal(<AddTask />);
  }, []);

  return (
    <Layout>
      <>
        <Modal isOpen={isOpenModal}>{content!}</Modal>
        <Menu />
        <Main>
          <div className="grow">
            <div className="h-16 border-b-2 border-slate-400">
              <div className="w-80 h-full flex justify-around items-center">
                <Button
                  text="Add a task"
                  color="btn-success"
                  onClick={openModal}
                />
                <Button text="Delete all" color="btn-error" />
              </div>
            </div>
          </div>
        </Main>
      </>
    </Layout>
  );
};
