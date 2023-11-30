import websites from "../consts/websites";

export default {
  get(target, name) {
    if (name === "email") return `${websites.email}${target.email}`;

    if (name === "phone") return `tel:${target.phone}`;

    if (name === "linkedin")
      return `https://${websites.linkedin}${target.linkedin}`;

    if (name === "discord")
      return `https://${websites.discord}${target.discord.id}`;
    if (name === "discordTag") return target.discord.tag;
    return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${
      target[name]
    }`;
  },
};
