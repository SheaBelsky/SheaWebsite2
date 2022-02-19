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

export type WorkKey =
  | "hubspot"
  | "ezra"
  | "google"
  | "ibm"
  | "mentra"
  | "wayfair";

const WORK_DATA: Record<WorkKey, WorkShape> = {
  ezra: {
    company: "Ezra",
    dates: "October 2016 - May 2020",
    description: [
      "Ezra Tech is a full-service solution for Science Olympiad event management. I am one of the co-founders of the platform, the CTO, and CIO. I actively develop and maintain the platform, provide customer support to users, work directly with customers and clients to onboard them to the platform, and attend the competitions of customers to ensure system uptime and speed.",
      "As of April 2019, Ezra has hosted more than 100 Science Olympiad competitions, has over 2000 registered users, and hundreds of daily active users. Ezra will be the primary solution for logistics, scoring, and user management for the 2019 Science Olmpiad National Tournament."
    ],
    readingLinks: [
      {
        description:
          "A case study I did on Science Olympiad that informed the design and development of Ezra",
        href: "https://medium.com/@sheabelsky/science-olympiad-a-case-study-385a87cada14",
        title: "Science Olympiad: A case study"
      }
    ],
    title: "Co-Founder, Chief Technology Officer, and Chief Information Officer"
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
    dates: "June 2021 - March 2022",
    description:
      "I worked for HubSpot as a Senior Software Engineer I. I was a frontend engineer for the Social team, connecting HubSpot's customers and companies with social media analytics and putting the power of social media at their fingertips.",
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
    title: "Senior Software Engineer I"
  },
  ibm: {
    company: "IBM Watson",
    dates: "June - August 2015 and 2016",
    description: [
      "Summer 2016 - I worked in IBM Watson's Astor Place office, developing tools and prototypes that implemented various Watson services and offerings. With the Advanced Client Technology and Solutions team, I developed a video summarization algorithm, API, and web client, and presented my findings to team members and IBM Watson offering management.",
      "Summer 2015 - During the summer of 2016, I worked in IBM Watson's Littleton Office on the Watson Engagement Advisor App Squad. Here, I add the ability for users to speak to the Watson Conversation Car Dashboard demo with their computer's microphone. This functionality more realistically emulates how clients would interact with Watson in a car, versus only being able to communicate with a keyboard. I also worked on a Pokemon GO chat application that enabled users to speak to a fascimile of Professor Oak from Pokemon, and ask it questions regarding Pokemon GO."
    ],
    readingLinks: [],
    title: "Front End Web Development Intern"
  },
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
  },
  wayfair: {
    company: "Wayfair",
    dates: "March 2019 - June 2021",
    description: [
      "I am a member of the Stores and Geos team, which maintains and improves upon the experiences for Wayfair's Specialty Retail Brands and International stores. I work with different teams from across Wayfair in order to tailor each part of Wayfair's platform to the unique needs and expectations of each store. I collaborate heavily with product managers, experience designers & researchers, business intelligence, analytics, and QA to develop and execute upon projects that are specific to Wayfair's broad range of stores. I previously worked on the Home Services (February 2020 - July 2020) and Design Services (March 2019 - February 2020) teams.",
      "I was also the Tech Lead for Awesome Learning, a front-end-web focused learning platform created by current and former members of Wayfair Engineering. It hosts interactive courses on topics such as CSS, JavaScript Unit Testing, React Hooks, and much more. As the Tech Lead, I am responsible for maintaining our platform, working with engineers to develop new content, and execute upon projects to grow Awesome Learning within Wayfair and the rest of the engineering community at large."
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

export default WORK_DATA;
