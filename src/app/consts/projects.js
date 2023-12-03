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
    id: "chertnodes",
    links: {
      figma: "1149829028455305659",
    },
    techs: ["python", "flask", "scss"],
    hasImage: true,
  },
  {
    id: "protectx",
    techs: ["react", "node", "discordJs"],
    links: {
      figma: "1168662007492356291",
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
