import Hero from "@/blocks/home/Hero.js";
import Quote from "@/blocks/home/Quote.js";
import Projects from "@/blocks/home/Projects.js";
import Skills from "@/blocks/home/Skills.js";
import About from "@/blocks/home/About.js";
import Contacts from "@/blocks/home/Contacts.js";
import Experience from "@/blocks/home/experience.js";
import "styles/pages/home.sass"
    //${Projects(t.projects, locale.projects)}

export default (t, locale) => {
    return /*html*/`
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${Experience(t.experience)}
    
        ${Skills(t.skills, locale.skills)}
        ${About(t.about)}
        ${Contacts(t.contacts)}
    `;
};
