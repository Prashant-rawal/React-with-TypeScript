import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "Prashant Rawal",
    company: "Tridhya Tech",
  },
  title: "React With TypeScript v1",
  subtitle: "Getting Started in React With TypeScript",
  description: "A simple yet powerful guide for using react with typescript",
  keywords: ["react", "Prashant Rawal", "TypeScript", "tridhya tech"],
  social: {
    linkedin: "https://www.linkedin.com/in/prashant-rawal-12142b117",
    github: "https://github.com/IAmCuriousDeveloper",
  },
  productionBaseUrl: "/React-with-TypeScript",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
