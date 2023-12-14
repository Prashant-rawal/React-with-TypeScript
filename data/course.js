import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "Prashant Rawal",
    company: "An Author's Company",
  },
  title: "A Superb Course",
  subtitle: "That Teaches Nice Things",
  frontendMastersLink: "",
  description: "A nice course for nice people.",
  keywords: ["a nice course", "for people", "to learn", "nice things"],
  social: {
    linkedin: "Prashant",
    github: "Prashant",
    twitter: "Prashant",
  },
  productionBaseUrl: "/",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
