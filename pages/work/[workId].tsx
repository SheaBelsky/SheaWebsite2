import type { GetStaticPaths, GetStaticProps } from "next";
import WORK_DATA, { WorkKey, WorkShape } from "../../lib/work_data";
import BaseLayout from "../../components/base_layout";
import WorkDetailPageComponent from "../../components/pages/work_detail_page";

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: Object.keys(WORK_DATA).map((workId) => ({ params: { workId } }))
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const workId = params?.workId;

  // Return a 404 if the provided parameter does not have any data
  if (typeof workId !== "string" || !WORK_DATA.hasOwnProperty(workId)) {
    return {
      notFound: true
    };
  }

  const workData = WORK_DATA[workId as WorkKey];
  return {
    props: workData
  };
};

const WorkDetailPage = (props: WorkShape) => (
  <BaseLayout
    description={`Shea Belsky's time at ${props.company}`}
    title={props.company}
  >
    <WorkDetailPageComponent {...props} />
  </BaseLayout>
);

export default WorkDetailPage;
