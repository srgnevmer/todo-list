import { FC } from "react";
import { Layout, Menu, Main } from "../components";

export const Active: FC = () => {
  return (
    <Layout>
      <>
        <Menu />
        <Main>
          <div></div>
        </Main>
      </>
    </Layout>
  );
};
