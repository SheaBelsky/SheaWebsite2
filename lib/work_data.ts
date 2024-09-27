export interface WorkShape {
  company: string;
  dates: string;
  description: string | Array<string>;
  readingLinks: Array<{
    description: string;
    href: string;
    title: string;
  }>;
  title: string;
}

export type WorkId =
  | "hubspot"
  | "ezra"
  | "google"
  | "ibm"
  | "mentra"
  | "wayfair";

const WORK_DATA: Record<WorkId, WorkShape> = {
  ezra: {
    company: "Ezra",
    dates: "October 2016 - May 2020",
    description: [
      "Ezra Tech was a full-service solution for Science Olympiad event management. I was one of the cofounders of the platform, the CTO, and CIO. I actively developed and maintained the platform, provided customer support to users, worked directly with customers and clients to onboard them to the platform, and attended the competitions of customers to ensure success and satisfaction.",
      "As of 2020, Ezra hosted more than 150 Science Olympiad competitions, has over 3,000 registered users, and 1,000 monthly active users during competitions eason. Ezra was the primary solution for logistics, scoring, and user management for the 2019 Science Olmpiad National Tournament. Each tournament organizer saved 100 hours on average when using Ezra as compared to existing solutions."
    ],
    readingLinks: [
      {
        description:
          "A case study I did on Science Olympiad that informed the design and development of Ezra",
        href: "https://medium.com/@sheabelsky/science-olympiad-a-case-study-385a87cada14",
        title: "Science Olympiad: A case study"
      }
    ],
    title: "Cofounder, Chief Technology Officer, and Chief Information Officer"
  },
  google: {
    company: "Google",
    dates: "May - August 2018",
    description:
      "I worked with Google's Search and Assistant team during the Summer of 2018 as a User Experience Engineering Intern. I was a member of the sumUX team, in Google's Mountain View campus. I worked on prototypes for Google's Search and Assistant products, developed internal tools to aid User Experience Designers and Engineers with prototype ideation and exploration, and aided User Experience Researchers with conducting and understanding the results of research.",
    readingLinks: [
      {
        description:
          "A Medium blog post I wrote about my time as a UXE intern at Google",
        href: "https://uxdesign.cc/user-experience-engineering-the-adventure-from-student-to-google-intern-cef990125493",
        title:
          "User Experience Engineering: The adventure from student to Google intern"
      },
      {
        description:
          "I was featured in the 30th edition of Google's Student Blog; I disucssed my time as a UX Engineering Intern, and how I got there.",
        href: "https://blog.google/inside-google/life-at-google/welcome-to-30th-installment-of-our-blog/",
        title:
          "My Path To Google: Shea Hunter Belsky, User Experience (UX) Engineer Intern"
      }
    ],
    title: "User Experience Engineering Intern"
  },
  hubspot: {
    company: "HubSpot",
    dates: "June 2021 - March 2022, September 2024 - present",
    description: [
      "As of 2024, I'm on the Service Hub team working on their Onboarding & Customization team!",
      "From 2021-2022, I worked for HubSpot as a Senior Software Engineer I. On the Social team, I connected HubSpot's customers and companies with social media analytics and putting the power of social media at their fingertips. I was also an accessibility advocate, presenting on the topic internally to a non-technical audience about the importance of accessibility, its impact and benefits to customers, and how to think like an a11y."
    ],
    readingLinks: [
      {
        description:
          "Improve your website's accessibility and your visitors' experience by running a quick accessibility check — here's how.",
        href: "https://blog.hubspot.com/website/website-accessibility-check",
        title:
          "How to Run a Website Accessibility Check (According to HubSpot Developers)"
      },
      {
        description:
          "I contributed to this checklist on HubSpot's blog! Learn how to improve your website's accessibility and think more like an a11y!",
        href: "https://blog.hubspot.com/website/web-accessibility-guidelines",
        title:
          "A Web Accessibility Checklist to Make Your Content 100% Compliant"
      }
    ],
    title: "Senior Software Engineer II"
  },
  ibm: {
    company: "IBM Watson",
    dates: "June - August 2016 and 2017",
    description: [
      "Summer 2017 - I worked in IBM Watson's Astor Place office, developing tools and prototypes that implemented various Watson services and offerings. With the Advanced Client Technology and Solutions team, I developed a video summarization algorithm, API, and web client, and presented my findings to team members and IBM Watson offering management.",
      "Summer 2016 - During the summer of 2016, I worked in IBM Watson's Littleton Office on the Watson Engagement Advisor App Squad. Here, I add the ability for users to speak to the Watson Conversation Car Dashboard demo with their computer's microphone. This functionality more realistically emulates how clients would interact with Watson in a car, versus only being able to communicate with a keyboard. I also worked on a Pokemon GO chat application that enabled users to speak to a fascimile of Professor Oak from Pokemon, and ask it questions regarding Pokemon GO."
    ],
    readingLinks: [],
    title: "Front End Web Development Intern"
  },
  mentra: {
    company: "Mentra",
    dates: "March 2022 - August 2024",
    description: [
      "I am the Chief Technology Officer for Mentra's engineering team, whose goal is to create a hiring platform for neurodivergent jobseekers. As Chief Technology Officer, I implement the product vision for Mentra’s web app from its conception, working closely with product, analytics, ops, marketing, and sales.",
      "I recruited, grew, and have retained a team of 4 software engineers, fostered positive developer experience, maintained sprint backlog, and set team goals & deadlines. Additionally, I created processes for release cycles, automated/manual/regression testing, A/B experiments, documentation, retrospectives, CI/CD, alerting, and compliance (SOC2, GDPR, CCPA, etc.)"
    ],
    readingLinks: [
      {
        description: "Mentra's homepage",
        href: "https://www.mentra.com/",
        title: "Mentra.com"
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
      },
      {
        description:
          "Feature on Microsoft's Unlocked website about neurodiversity and Mentra",
        href: "https://unlocked.microsoft.com/mentra-neuroinclusion/",
        title: "Microsoft: The future of work is neurodiverse"
      },
      {
        description: "TechCrunch feature on Mentra's Seed Round",
        href: "https://techcrunch.com/2023/09/05/sam-altman-backed-startup-aims-to-match-neurodivergent-jobseekers-with-ideal-jobs/?guccounter=1",
        title:
          "Sam Altman-backed Mentra aims to match neurodivergent jobseekers with ideal jobs"
      }
    ],
    title: "Chief Technology Officer, Technical Founder"
  },
  wayfair: {
    company: "Wayfair",
    dates: "March 2019 - June 2021",
    description: [
      "I was a member of the Stores and Geos team, which maintains and improves upon the experiences for Wayfair's Specialty Retail Brands and International stores. I worked with different teams from across Wayfair in order to tailor each part of Wayfair's platform to the unique needs and expectations of each store. I collaborated heavily with product managers, experience designers & researchers, business intelligence, analytics, and QA to develop and execute upon projects that are specific to Wayfair's broad range of stores.",
      "I was the DRI (Directly Responsible Individual) for the Product Card Overhaul project, reimagining the product preview experience on Wayfair’s specialty stores (10,00,000+ MAU), rapidly experimenting and iterating post release to maximize learnings and success.",
      "I previously worked on the Home Services team (February 2020 - July 2020) and Design Services team (March 2019 - February 2020).",
      "I was also the Tech Lead for Awesome Learning, a front-end-web focused learning platform created by current and former members of Wayfair Engineering. It hosted interactive courses on topics such as CSS, JavaScript Unit Testing, React Hooks, and much more. As the Tech Lead, I was responsible for maintaining our platform, working with engineers to develop new content, and executed upon projects to grow Awesome Learning within Wayfair and the rest of the engineering community."
    ],
    readingLinks: [
      {
        description:
          "A blog post by Wayfair Tech covering the open-source publishing of the Awesome Learning platform!",
        href: "https://www.aboutwayfair.com/2019/09/awesome-learning/",
        title:
          "Open-Sourcing Our Internal Frontend Education Platform – Awesome Learning"
      }
    ],
    title: "Engineer II, Tech Lead"
  }
};

export const workDataKeysForRoutes = Object.keys(WORK_DATA).map((workId) => ({
  workId
}));

export default WORK_DATA;
