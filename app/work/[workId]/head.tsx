import { SheaBelskyNextSEO } from "../../../components/seo";
import WORK_DATA, { type WorkId } from "../../../lib/work_data";

const WorkHead = (props: { params: { workId: string } }) => {
  const workItem = WORK_DATA[props.params.workId as WorkId];
  return (
    <SheaBelskyNextSEO
      description={`Shea Belsky's time at ${workItem?.company}`}
      title={`Shea Belsky - ${workItem?.company}`}
      url={`https://sheabelsky.com/work/${props.params.workId}`}
    />
  );
};

export default WorkHead;
