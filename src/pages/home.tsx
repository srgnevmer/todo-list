import { FC } from "react";
import { Layout, Menu, Main } from "../components";

export const Home: FC = () => {
  return (
    <Layout>
      <>
        <Menu />
        <Main />
      </>
    </Layout>
  );
};
