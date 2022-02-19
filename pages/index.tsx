import BaseLayout from "../components/base_layout";
import HomeComponent from "../components/pages/home";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BaseLayout description="Things are happening" title="Shea Belsky">
      <HomeComponent />
    </BaseLayout>
  );
};

export default Home;
