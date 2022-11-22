"use client";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { Fragment } from "react";
import WorkRow from "../../components/work_row";

const WorkComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Work
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="#D27CB3"
          dates="March 2020 - Present"
          href="/work/mentra"
          linkVariant="next"
          subtitle="Chief Technology Officer, Tech Lead"
          title="Mentra"
        />
        <WorkRow
          backgroundColor="#FF7A59"
          dates="June 2021 - March 2022"
          href="/work/hubspot"
          linkVariant="next"
          subtitle="Senior Software Engineer I"
          title="HubSpot"
        />
        <WorkRow
          backgroundColor="#7F187F"
          dates="March 2019 - June 2021"
          href="/work/wayfair"
          linkVariant="next"
          subtitle="Engineer II, Tech Lead"
          title="Wayfair"
        />
        <WorkRow
          backgroundColor="#D33939"
          dates="October 2016 - May 2020"
          href="/work/ezra"
          linkVariant="next"
          subtitle="Chief Technology & Information Officer"
          title="Ezra"
        />
        <WorkRow
          backgroundColor="#4286F5"
          dates="May - August 2018"
          href="/work/google"
          linkVariant="next"
          subtitle="User Experience Engineering Intern"
          title="Google"
        />
        <WorkRow
          backgroundColor="#8CC640"
          dates="June - August 2016 & 2017"
          href="/work/ibm"
          linkVariant="next"
          subtitle="Frontend Web Development Intern"
          title="IBM Watson"
        />
      </SimpleGrid>
    </Fragment>
  );
};

export default WorkComponent;
