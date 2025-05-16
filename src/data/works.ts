export interface Work {
  position: string;
  company: string;
  date: string;
  what: string;
  whatFor?: string;
  result?: string;
}

const works: Work[] = [
  {
    position: "Backend Developer",
    company: "CBQA Solutions",
    date: "September 2024 - Present",
    what: "Back End Developer, working on both new and existing projects, focused on building and maintaining scalable and reliable APIs for mobile and web platforms.",
  },
  {
    position: "Full Stack Developer",
    company: "Financial Solutions",
    date: "February 2024 - September 2024",
    what: "Fullstack web developer in the software assurance area. I solved incidences and added new features to existing projects. I worked with Docker, Java, React,  SQL and AWS services.",
  },
  {
    position: "Freelance",
    company: "Imprenta ABC",
    date: "January 2023 - March 2023",
    what: "Inventory management and sales control system.",
    whatFor:
      "It optimized internal processes, impacting the reduction of losses and employee material theft within the company.",
    result:
      "Providing a transparent and detailed insight into resource utilization.",
  },
];

export default works;
