import BaseLayout from "../components/base_layout";
import HomeComponent from "../components/pages/home";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <BaseLayout
    description="Portfolio, resume, and photography for Shea Belsky"
    title="Shea Belsky"
    wrapperStyleProps={{ flexDirection: { base: "column", md: "row" } }}
  >
    <HomeComponent />
  </BaseLayout>
);

export default Home;
