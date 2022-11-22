import BaseLayout from "../components/base_layout";
import HomeComponent from "./home";

const IndexPage = () => (
  <BaseLayout
    wrapperStyleProps={{ flexDirection: { base: "column", md: "row" } }}
  >
    <HomeComponent />
  </BaseLayout>
);

export default IndexPage;
