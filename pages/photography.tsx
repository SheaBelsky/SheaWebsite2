import BaseLayout from "../components/base_layout";
import type { NextPage } from "next";
import PhotographyComponent from "../components/pages/photography";

const PhotographyPage: NextPage = () => (
  <BaseLayout description="Shea Belsky's photography" title="Photography">
    <PhotographyComponent />
  </BaseLayout>
);

export default PhotographyPage;
