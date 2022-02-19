export interface WorkShape {
  company: string;
  dates: string;
  description: string;
  readingLinks: Array<{
    description: string;
    href: string;
    title: string;
  }>;
  title: string;
}

export type WorkKey = "mentra";

const WORK_DATA: Record<WorkKey, WorkShape> = {
  mentra: {
    company: "Mentra",
    dates: "March 2020 - present",
    description:
      "I am the Tech Lead for Mentra's engineering team, whose goal is to create a hiring platform for people with autism. By 2025, Mentra aims to have employ 100,000 talented autistic individuals! As Tech lead, I work with leadership, experience design, and QA to develop, plan, and execute an engineering roadmap to onboard candidates and recruiters to our platform.",
    readingLinks: [
      {
        description: "Mentra's homepage",
        href: "https://www.mentra.me/",
        title: "Mentra.me"
      },
      {
        description: "Feature of Mentra on the Microsoft Accessibility Blog",
        href: "https://blogs.microsoft.com/accessibility/how-ai-is-being-used-to-improve-disability-employment/",
        title: "How AI is being used to improve disability employment"
      },
      {
        description:
          "Press release on Mentra's win of the ACL Challenge, run by the United States Department of Human Health Services",
        href: "https://acl.gov/news-and-events/announcements/acl-awards-grand-prize-inclusive-talent-pipeline-american-businesses",
        title:
          "ACL Awards Grand Prize in the 'Inclusive Talent Pipeline for American Businesses' Challenge"
      }
    ],
    title: "Chief Technology Officer, ex Tech/Engineering Lead"
  }
};

export default WORK_DATA;
