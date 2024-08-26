"use client";

import { Fragment } from "react";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import WorkRow from "../../components/work_row";

const NewsComponent = () => {
  return (
    <Fragment>
      <Heading as="h1" marginBottom="20px">
        Featured Articles and Written Works
      </Heading>
      <Text marginY={5}>
        I take a lot of pride in getting the word out about neurodiversity,
        accessibility, and entrepreneurship. If your organization wants to level
        up their neuroinclusion and accessibility efforts, please reach out to
        me: hello(at)sheabelsky.com.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
        <WorkRow
          backgroundColor="purple.600"
          dates="July 12, 2024"
          href="https://www.hrgrapevine.com/us/content/article/2024-07-12-the-worlds-largest-hr-body-wants-to-change-ied-to-just-id-hr-pros-really-arent-happy-about-it"
          linkVariant="basic"
          subtitle="HR Grapevine"
          title="The world's largest HR body wants to change IE&D to just I&D. HR pros really aren't happy about it"
        />
        <WorkRow
          backgroundColor="blue.600"
          dates="July 1, 2024"
          href="https://www.topcollegeconsultants.com/wp-content/uploads/2024/02/JCA-Winter24-ConfidentandEmpowered-1.pdf"
          linkVariant="basic"
          subtitle="Eric Endlich for the Journal of College Admissions"
          title="Confident and Empowered: College Counseling for Autistic Students"
        />
        <WorkRow
          backgroundColor="orange.600"
          dates="February 6, 2024"
          href="https://www.ceigateway.com/15-unique-perks-proven-to-attract-and-retain-talent/"
          linkVariant="basic"
          subtitle="Center for Entrepreneurial Innovation (Maricopa Community College)"
          title="15 Unique Perks Proven To Attract And Retain Talent"
        />
        <WorkRow
          backgroundColor="green.400"
          dates="September 5, 2023"
          href="https://techcrunch.com/2023/09/05/sam-altman-backed-startup-aims-to-match-neurodivergent-jobseekers-with-ideal-jobs/"
          linkVariant="basic"
          subtitle="TechCrunch"
          title="Sam Altman-backed Mentra aims to match neurodivergent jobseekers with ideal jobs"
        />
        <WorkRow
          backgroundColor="black"
          dates="August 20, 2023"
          href="https://medium.com/authority-magazine/neurodiversity-in-the-workforce-shea-belsky-of-mentra-on-why-its-important-to-include-95cad997ae8"
          linkVariant="basic"
          subtitle="Authority Magazine"
          title="Neurodiversity in the Workforce: Shea Belsky Of Mentra On Why It's Important To Include Neurodiverse Employees & How To Make Your Workplace More Neuro-Inclusive"
        />
        <WorkRow
          backgroundColor="yellow.600"
          dates="August 16, 2023"
          href="https://www.collegerecruiter.com/blog/2023/08/16/9-ways-for-employers-to-make-their-job-postings-friendlier-to-those-who-are-neurodivergent"
          linkVariant="basic"
          subtitle="College Recruiter"
          title="9 ways for employers to make their job postings friendlier to those who are neurodivergent"
        />
        <WorkRow
          backgroundColor="red.500"
          dates="June 13, 2023"
          href="https://nypost.com/2023/06/11/neurodiversity-adds-to-the-workplace/"
          linkVariant="basic"
          subtitle="New York Post"
          title="Neurodiversity adds to the workplace, as these successes show"
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
          backgroundColor="gray.500"
          dates="August 18, 2022"
          href="https://www.jbbbs.org/an-autistic-connection-a-friendship-fueled-by-shared-experiences/"
          linkVariant="basic"
          subtitle="Jewish Big Brothers Big Sisters of Greater Boston"
          title="An autistic connection: a friendship fueled by shared experiences"
        />
        <WorkRow
          backgroundColor="purple.400"
          dates="August 4, 2022"
          href="https://researchautism.org/preparing-for-adult-life-and-work/"
          linkVariant="basic"
          subtitle="Research Autism"
          title="Preparing for Adult Life and Work"
        />
        <WorkRow
          backgroundColor="pink.500"
          dates="April 2022"
          href="https://scarysymptoms.com/2022/04/free-service-pairs-autistic-adults-with-asd-friendly-employers/"
          linkVariant="basic"
          subtitle="Scary Symptoms"
          title="Free Service Helps Autistic People Find Inclusive Employment"
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

export default NewsComponent;
