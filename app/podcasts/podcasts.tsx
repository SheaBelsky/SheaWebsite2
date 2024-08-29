"use client";

import { Fragment } from "react";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import WorkRow from "../../components/work_row";

const TalksComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Podcasts
      </Heading>
      <Text marginY={5}>
        Podcasts are one of my favorite ways to connect with audiences, educate
        folks about neurodiversity, and promote meaningful conversations. Want
        me on your podcast? Reach out to me: hello(at)sheabelsky.com.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="red.600"
          dates="May 14, 2024"
          href="https://shows.acast.com/imustbebugn/episodes/it-must-be-a-conversation-with-shea-belsky"
          linkVariant="basic"
          subtitle="I Must Be BUG'N"
          title="It Must Be a Conversation with Shea Belsky"
        />
        <WorkRow
          backgroundColor="yellow.600"
          dates="Apr 26, 2024"
          href="https://www.youtube.com/watch?v=3uAGHBn9wGQ"
          linkVariant="basic"
          subtitle="Focus Bear - ADHD friendly productivity app"
          title="Innovation & Inclusivity: Neurodivergent Hiring Platform w/ Shea Belsky"
        />
        <WorkRow
          backgroundColor="green.600"
          dates="January 25, 2024"
          href="https://www.youtube.com/watch?v=aBkjPzkuk24"
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
