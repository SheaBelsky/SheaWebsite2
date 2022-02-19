import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Fragment } from "react";
import WorkRow from "../work_row";

const WorkComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Work
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="#D27CB3"
          company="Mentra"
          dates="March 2020 - Present"
          title="Chief Technology Officer, Tech Lead"
        />
        <WorkRow
          backgroundColor="#FF7A59"
          company="HubSpot"
          dates="June 2021 - March 2022"
          title="Senior Software Engineer I"
        />
        <WorkRow
          backgroundColor="#7F187F"
          company="Wayfair"
          dates="March 2019 - June 2021"
          title="Engineer II, Tech Lead"
        />
        <WorkRow
          backgroundColor="#D33939"
          company="Ezra"
          dates="October 2016 - May 2020"
          title="Chief Technology & Information Officer"
        />
        <WorkRow
          backgroundColor="#4286F5"
          company="Google"
          dates="May - August 2018"
          title="User Experience Engineering Intern"
        />
        <WorkRow
          backgroundColor="#8CC640"
          company="IBM Watson"
          dates="June - August 2016 & 2017"
          title="Frontend Web Development Intern"
        />
      </SimpleGrid>
    </Fragment>
  );
};

export default WorkComponent;
