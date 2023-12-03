/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
  {
    id: "deplos",
    links: {
      figma: "1198393124994627983",
      live: "deplos.com",
    },
    techs: ["pug", "stylus", "node"],
    hasImage: true,
  },
  {
    id: "feedrum",
    links: {
      github: "Feedrum-Project/feedrum-next",
      live: "feedrum.com",
    },
    techs: ["node", "next", "react", "zod"],
    hasImage: true,
  },
  {
    id: "BabyPanda",
    links: {
      github: "/BabyPanda",
      demo: "//drive.google.com/file/d/1wCVxoCIBMHFi08XTZ6GWeJWtAB9QCfxl/view?usp=sharing"
    },
    techs: ["java", "javafx", "hibernate", "mysql"],
    hasImage: true,
  },
  {
    id: "AREEQ",
    techs: ["figma"],
    links: {
      figma: "//www.figma.com/file/tReSwaRIz56MmFY1Y0ZoGo/UI-project-Areeq?type=design&node-id=0%3A1&mode=design&t=r1nsWIjwkTJieFq2-1",
      report: "//drive.google.com/file/d/1M38yCw9ICBa61YSxA6zrwfdKByFmfXqV/view?usp=sharing"
    },
    hasImage: true,
  },
  {
    id: "khanswers",
    techs: ["express", "node", "ejs"],
    links: {
      live: "khanswers.vercel.app",
      github: "/kahoot-answers",
    },
    hasImage: true,
  },
  {
    id: "kotikbot",
    techs: ["html", "css", "js"],
    links: {
      live: "kotikbot.github.io",
      github: "kotikbot/kotikbot.github.io",
    },
    hasImage: true,
  },
  {
    id: "portfolio",
    techs: ["js", "sass", "webpack"],
    links: {
      figma: "1164933568884615740",
      github: "/portfolio",
    },
    hasImage: true,
  },
  {
    id: "Hospital-Administration",
    techs: ["java"],
    links: {
      github: "/Hospital-Administration",
    },
    isSmall: true,
  },
  {
    id: "The-Data-Sorter",
    techs: ["python"],
    links: {
      github: "/The-Data-Sorter",
    },
    isSmall: true,
  },
  {
    id: "Data-Structure-Project",
    techs: ["java"],
    links: {
      github: "/Data-Structure-Project",
    },
    isSmall: true,
  },
  {
    id: "DB-Coffee-Store",
    techs: ["sql","mysql"],
    links: {
      github: "/DB-Coffee-Store",
    },
    isSmall: true,
  },
];

export default projects;
