import BaseLayout from "../components/base_layout";
import type { NextPage } from "next";
import WorkComponent from "../components/pages/work";

const WorkPage: NextPage = () => (
  <BaseLayout description="Shea Belsky's work history" title="Work History">
    <WorkComponent />
  </BaseLayout>
);

export default WorkPage;
