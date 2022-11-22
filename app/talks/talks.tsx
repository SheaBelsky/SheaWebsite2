"use client";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { Fragment } from "react";
import WorkRow from "../../components/work_row";

const TalksComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Talks and Written Work
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="green.500"
          dates="August 18, 2022"
          href="https://www.jbbbs.org/an-autistic-connection-a-friendship-fueled-by-shared-experiences/"
          linkVariant="basic"
          subtitle="Jewish Big Brothers Big Sisters of Greater Boston"
          title="Blog: An autistic connection: a friendship fueled by shared experiences"
        />
        <WorkRow
          backgroundColor="#7F187F"
          dates="August 18, 2022"
          href="https://www.youtube.com/watch?v=I40uwPHMDBI"
          linkVariant="basic"
          subtitle="Mentra & CodeUp"
          title="Webinar: Neurodiversity Discussion Panel"
        />
        <WorkRow
          backgroundColor="#08717E"
          dates="August 4, 2022"
          href="https://researchautism.org/preparing-for-adult-life-and-work/"
          linkVariant="basic"
          subtitle="Research Autism"
          title="Blog: Preparing for Adult Life and Work"
        />
        <WorkRow
          backgroundColor="#D27CB3"
          dates="April 27, 2022"
          href="https://www.youtube.com/watch?v=hgWid0UkZtw"
          linkVariant="basic"
          subtitle="Mentra"
          title="Webinar: Unmasking the World's Neurodiversity and Bringing your Authentic Self to Work"
        />
        <WorkRow
          backgroundColor="red.500"
          dates="April 2022"
          href="https://scarysymptoms.com/2022/04/free-service-pairs-autistic-adults-with-asd-friendly-employers/"
          linkVariant="basic"
          subtitle="Scary Symptoms"
          title="Free Service Helps Autistic People Find Inclusive Employment"
        />
        <WorkRow
          backgroundColor="#FF7A59"
          dates="December 7, 2021"
          href="https://www.youtube.com/watch?v=WR15vXWEo64"
          linkVariant="basic"
          subtitle="HubSpot & Raka Collective"
          title="Tech Talk: Becoming an A11y: Why Accessibility Matters to Everyone"
        />
        <WorkRow
          backgroundColor="#1D355E"
          dates="January 4, 2021"
          href="https://anchor.fm/autism-personal-coach/episodes/Autism-Stories-Shea-Belsky-eoggf0"
          linkVariant="basic"
          subtitle="Autism Personal Coach"
          title="Podcast: Autism Stories"
        />
        <WorkRow
          backgroundColor="#B31B1B"
          dates="December 7, 2018"
          href="https://infosci.cornell.edu/information/news/newsitem773/student-spotlight-shea-belsky-info-sci-18-mps-18"
          linkVariant="basic"
          subtitle="Cornell University"
          title="Spotlight: Shea Belsky (Info Sci '18, MPS '18)"
        />
      </SimpleGrid>
    </Fragment>
  );
};

export default TalksComponent;