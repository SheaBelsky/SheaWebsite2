"use client";

import { Fragment } from "react";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import WorkRow from "../../components/work_row";

const TalksComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Speaking Engagements & Webinars
      </Heading>
      <Text marginY={5}>
        I love talking about my lived experiences as a neurodivergent leader and
        peer. Check out my previous speaking engagements below! If your
        organization wants to level up their neuroinclusion and accessibility
        efforts, please reach out to me: hello(at)sheabelsky.com.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="blue.800"
          dates="May 15, 2025"
          href="https://x.com/BosTypeScript/status/1920115220304761266"
          linkVariant="basic"
          subtitle="Boston TS Club"
          title="Neurodiversity and TypeScript"
        />
        <WorkRow
          backgroundColor="purple.400"
          dates="April 18, 2025"
          href="https://www.linkedin.com/posts/neurodiversity-employment-partnership_employtheneurodiverse-neurodivergentemployment-activity-7319173019229163520-ADcv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA8kep0BCTKHHD9uWXxJ1t5uYSkzVcUcAGM"
          linkVariant="basic"
          subtitle="Neurodiversity Employment Partnership"
          title="Support Neurodivergent Jobseekers and their Peers"
        />
        <WorkRow
          backgroundColor="blue.700"
          dates="March 7, 2025"
          href="https://www.spedchildmass.com/event/massachusetts-special-education-summit-collaborative-solutions-to-current-issues/"
          linkVariant="basic"
          subtitle="The League School"
          title="Promoting Self-Confidence for Neurodiverse Graduates Entering the Workforce"
        />
        <WorkRow
          backgroundColor="gray.700"
          dates="February 19, 2025"
          href="https://www.youtube.com/watch?v=-3Wz-ELTIxA"
          linkVariant="basic"
          subtitle="Davos Neurodiversity Summit"
          title="Recording: Investing in People Through Person-Centered Management"
        />
        <WorkRow
          backgroundColor="red.700"
          dates="February 17, 2025"
          href="https://www.naceweb.org/hbcu-and-inclusion-summit/index.html"
          linkVariant="basic"
          subtitle="NACE (National Association of Colleges and Employers)"
          title="Barriers & Facilitators of Pre-Employment Interview Success in STEM Fields for Autistic Job Candidates: Autistic Employee and Employer"
        />
        <WorkRow
          backgroundColor="purple.500"
          dates="October 28, 2024"
          href="https://www.kennedykrieger.org/sites/default/files/library/documents/community/neruodiversity-at-work/neurodiversity-at-work-conference/NDW24%20Agenda_v13%20(1).pdf"
          linkVariant="basic"
          subtitle="Kennedy Krieger Institute"
          title="Preparing and Developing Neurodivergent Employees for Leadership & Management in the Workplace"
        />
        <WorkRow
          backgroundColor="yellow.500"
          dates="August 15, 2024"
          href="https://lu.ma/63mo28ik"
          linkVariant="basic"
          subtitle="Nova, Chief of Staff"
          title="Nova Chat: Neurodivergence in the C-Suite, Sponsored by Mentra"
        />
        <WorkRow
          backgroundColor="green.400"
          dates="May 16, 2024"
          href="https://www.linkedin.com/events/7190847456299962369/comments/"
          linkVariant="basic"
          subtitle="Microsoft Entrepreneurship for Positive Impact"
          title="Supporting Accessibility Through AI​ (recording)"
        />
        <WorkRow
          backgroundColor="blue.400"
          dates="May 8, 2024"
          href="https://www.linkedin.com/posts/sheabelsky_in-talking-about-neurodiversity-with-hydrow-activity-7199088242384678912-yZOe"
          linkVariant="basic"
          subtitle="Hydrow"
          title="Supporting neurodiversity in your life and workplace"
        />
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
    </Fragment>
  );
};

export default TalksComponent;
