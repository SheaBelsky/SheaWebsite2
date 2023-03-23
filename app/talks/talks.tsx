"use client";
import { Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import WorkRow from "../../components/work_row";

const TalksComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Talks and Written Work
      </Heading>
      <Text marginY={5}>
        I love talking about my lived experiences as a neurodivergent leader and
        peer. If your organization wants to empower their employees and managers
        to be more neuroinclusive, please reach out to me at{" "}
        <Link href="mailto:hello@sheabelsky.com">hello@sheabelsky.com</Link>.
      </Text>
      <Text marginY={5}>
        Below is a list of my speaking engagements, written work, podcasts, and
        other places where I've been featured!
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="green.800"
          dates="February 23, 2023"
          href="https://open.spotify.com/episode/3xW5vwAGKCTw7xWp3JNBfe"
          linkVariant="basic"
          subtitle="You're Qualified - To Be A C-Suite Exec As A Neurodivergent Person"
          title="Podcast: You're Not Qualified"
        />
        <WorkRow
          backgroundColor="red.700"
          dates="February 15, 2023"
          href="https://www.eventbrite.com/e/shea-belsky-cto-speaker-event-tickets-513141188107"
          linkVariant="basic"
          subtitle="Northeastern University"
          title="Fireside Chat with Graduate Students in Engineering"
        />
        <WorkRow
          backgroundColor="#120c0f"
          dates="February 1, 2023"
          href="https://anchor.fm/glich/episodes/E25---Neurodivergence-and-the-tech-industry-e1tilou"
          linkVariant="basic"
          subtitle="Episode #25 - Neurodivergence and the tech industry"
          title="Podcast: glich"
        />
        <WorkRow
          backgroundColor="blue.300"
          dates="January 26, 2023"
          href="https://www.instagram.com/p/Co7-Q9qBa3U/"
          linkVariant="basic"
          subtitle="3LPlace"
          title="Talk with Neurodivergent Adults and Advocates"
        />
        <WorkRow
          backgroundColor="#7d46b4"
          dates="January 16, 2023"
          href="https://anchor.fm/assemblinginclusion/episodes/027-Mentra-e1thhtr"
          linkVariant="basic"
          subtitle="Episode #27 - Mentra"
          title="Podcast: Assembling Inclusion"
        />
        <WorkRow
          backgroundColor="#105CAB"
          dates="December 20, 2022"
          href="https://ndmc.pyd.org/fellowship/college-to-career-transition-resources-mentra-a-neurodiversity-employment-network/"
          linkVariant="basic"
          subtitle="National Disability Mentoring Coalition"
          title="College to Career Transition Resources: Mentra: A Neurodiversity Employment Network"
        />
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
        <WorkRow
          backgroundColor="#073949"
          dates="September, 2018"
          href="https://www.engineering.cornell.edu/students-code-cornell-community"
          linkVariant="basic"
          subtitle="Cornell Engineering"
          title="Students code for the Cornell community"
        />
      </SimpleGrid>
    </Fragment>
  );
};

export default TalksComponent;
