import BaseLayout from "../../../components/base_layout";
import WORK_DATA, {
  workDataKeysForRoutes,
  WorkId
} from "../../../lib/work_data";
import WorkDetailPageComponent from "./work_detail_page";

interface Props {
  params: { workId: string };
}

export function generateStaticParams() {
  return workDataKeysForRoutes;
}

const WorkDetailPage = (props: Props) => {
  const workData = WORK_DATA[props.params.workId as WorkId];
  return (
    <BaseLayout>
      <WorkDetailPageComponent {...workData} />
    </BaseLayout>
  );
};

export default WorkDetailPage;
