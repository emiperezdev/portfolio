export interface Work {
  position: string;
  company: string;
  date: string;
  what: string;
  whatFor: string;
  result: string;
}

const works: Work[] = [
  {
    position: "Full Stack Developer",
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
