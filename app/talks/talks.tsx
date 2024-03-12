"use client";

import { Fragment } from "react";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import WorkRow from "../../components/work_row";

const TalksComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Speaking Engagements, Podcasts, and Webinars
      </Heading>
      <Text marginY={5}>
        I love talking about my lived experiences as a neurodivergent leader and
        peer. Check out my previous speaking engagements below! If your
        organization wants to level up their neuroinclusion and accessibility
        efforts, please reach out to me at{" "}
        <Link href="mailto:hello@sheabelsky.com">hello@sheabelsky.com</Link>.
      </Text>

      <Heading as="h2" fontSize="24px" id="speaking" marginY={5}>
        Speaking Engagements
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="red.700"
          dates="March 10, 2024"
          href="https://www.mitaimlconference.com/agenda"
          linkVariant="basic"
          subtitle="MIT AI & ML Conference"
          title="AI x Inclusion"
        />
        <WorkRow
          backgroundColor="teal.500"
          dates="November 1, 2023"
          href="https://www.novartis.com/about/diversity-equity-inclusion/inclusivity"
          linkVariant="basic"
          subtitle="Novartis"
          title="A.B.L.E. Inclusion Summit"
        />
        <WorkRow
          backgroundColor="pink.700"
          dates="October 25, 2023"
          href="https://www.youtube.com/watch?v=BgN-ZDFULw8"
          linkVariant="basic"
          subtitle="Organization for Autism Research"
          title="Autism Inclusion in the Workplace Panel (recording)"
        />
        <WorkRow
          backgroundColor="blue.700"
          dates="July 25, 2023"
          href="https://www.ultimatemedical.edu/about/diversity-and-inclusion/"
          linkVariant="basic"
          subtitle="Ultimate Medical Academy"
          title="Neurodiversity in the Workplace with Shea Belsky"
        />
        <WorkRow
          backgroundColor="red.500"
          dates="May 23, 2023"
          href="https://aane.org/"
          linkVariant="basic"
          subtitle="Association for Autism and Neurodiversity (AANE) and Massachusetts Rehabilitation Coalition (MRC)"
          title="AANE and MRC Workshop: In Our Own Words"
        />
        <WorkRow
          backgroundColor="yellow.500"
          dates="April 26, 2023"
          href="https://www.novartis.com/about/diversity-equity-inclusion/inclusivity"
          linkVariant="basic"
          subtitle="Novartis"
          title="Courageous Conversations: Autism Awareness Month"
        />
        <WorkRow
          backgroundColor="green.500"
          dates="April 26, 2023"
          href="https://careers.confluent.io/pages/inclusion-and-diversity"
          linkVariant="basic"
          subtitle="Confluent"
          title="Building a Neuro inclusive Workplace: How to be an Ally and Advocate for Autistic Employees"
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
          backgroundColor="blue.300"
          dates="January 26, 2023"
          href="https://www.instagram.com/p/Co7-Q9qBa3U/"
          linkVariant="basic"
          subtitle="3LPlace"
          title="With Neurodivergent Adults and Advocates (recording)"
        />
        <WorkRow
          backgroundColor="#7F187F"
          dates="August 18, 2022"
          href="https://www.youtube.com/watch?v=I40uwPHMDBI"
          linkVariant="basic"
          subtitle="Mentra & CodeUp"
          title="Neurodiversity Discussion Panel (recording)"
        />
        <WorkRow
          backgroundColor="#D27CB3"
          dates="April 27, 2022"
          href="https://www.youtube.com/watch?v=hgWid0UkZtw"
          linkVariant="basic"
          subtitle="Mentra"
          title="Unmasking the World's Neurodiversity and Bringing your Authentic Self to Work (recording)"
        />
        <WorkRow
          backgroundColor="teal.400"
          dates="April 12, 2022"
          href="https://www.premierhealth.com/about-premier/diversity-and-inclusion"
          linkVariant="basic"
          subtitle="Premier Health"
          title="Fireside Chat with Shea and Robin Belsky"
        />
        <WorkRow
          backgroundColor="#FF7A59"
          dates="December 7, 2021"
          href="https://www.youtube.com/watch?v=WR15vXWEo64"
          linkVariant="basic"
          subtitle="HubSpot & Raka Collective"
          title="Becoming an A11y: Why Accessibility Matters to Everyone (recording)"
        />
      </SimpleGrid>

      <Heading as="h2" fontSize="24px" id="podcasts" marginY={5}>
        Podcasts
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="green.600"
          dates="January 25, 2024"
          href="https://open.spotify.com/episode/4iQYggbqxTJCvRqSG5h2fW?si=g6UTIMR0TWaoTwemvJM4XA"
          linkVariant="basic"
          subtitle="Talent Empowerment Podcast with Tom Finn"
          title="Neurodiversity in the Workplace"
        />
        <WorkRow
          backgroundColor="red.600"
          dates="October 11, 2023"
          href="https://www.youtube.com/watch?v=yC7GbcYSv1A"
          linkVariant="basic"
          subtitle="Gaining the Technology Leadership Edge"
          title="Creating a Neuro Inclusive Workplace"
        />
        <WorkRow
          backgroundColor="yellow.400"
          dates="October 3, 2023"
          href="https://open.spotify.com/episode/292aPeh6nKOWPVYrweBI1U"
          linkVariant="basic"
          subtitle="S2E9: Neurodivergence and autism at Work: Unpacking the Challenges and Triumphs"
          title="Let's Break Up - Toxic Workplace Stories"
        />
        <WorkRow
          backgroundColor="cyan.600"
          dates="June 5, 2023"
          href="https://www.youtube.com/watch?v=ZEk67mzfTI8"
          linkVariant="basic"
          subtitle="On The Spectrum"
          title={`"We're Employable" - Shea Belsky: CTO of Mentra`}
        />
        <WorkRow
          backgroundColor="teal.400"
          dates="April 27, 2023"
          href="https://open.spotify.com/episode/62MM2ZkkMnxVZkUGdMhQsK"
          linkVariant="basic"
          subtitle="Atypical Parenting"
          title="Shea Belsky, Mentra and Thoughts on Living Life with Autism"
        />
        <WorkRow
          backgroundColor="red.400"
          dates="March 3, 2023"
          href="https://open.spotify.com/episode/72PvUSNsJacdAQUGDuvQOC"
          linkVariant="basic"
          subtitle="Neurodiverse Noise"
          title="Human Resources"
        />
        <WorkRow
          backgroundColor="green.800"
          dates="February 23, 2023"
          href="https://open.spotify.com/episode/3xW5vwAGKCTw7xWp3JNBfe"
          linkVariant="basic"
          subtitle="You're Not Qualified"
          title="You're Qualified - To Be A C-Suite Exec As A Neurodivergent Person"
        />
        <WorkRow
          backgroundColor="#120c0f"
          dates="February 1, 2023"
          href="https://anchor.fm/glich/episodes/E25---Neurodivergence-and-the-tech-industry-e1tilou"
          linkVariant="basic"
          subtitle="glich"
          title="Episode #25 - Neurodivergence and the tech industry"
        />
        <WorkRow
          backgroundColor="#7d46b4"
          dates="January 16, 2023"
          href="https://anchor.fm/assemblinginclusion/episodes/027-Mentra-e1thhtr"
          linkVariant="basic"
          subtitle="Assembling Inclusion"
          title="Episode #27 - Mentra"
        />
        <WorkRow
          backgroundColor="#1D355E"
          dates="January 4, 2021"
          href="https://anchor.fm/autism-personal-coach/episodes/Autism-Stories-Shea-Belsky-eoggf0"
          linkVariant="basic"
          subtitle="Autism Stories"
          title="Autism Personal Coach"
        />
      </SimpleGrid>
    </Fragment>
  );
};

export default TalksComponent;
