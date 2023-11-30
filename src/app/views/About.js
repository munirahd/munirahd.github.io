import Path from "@/components/Path.js";
import About from "@/blocks/about/About.js"
import Skills from "@/blocks/about/Skills.js";
import Facts from "@/blocks/about/Facts.js";

import "styles/pages/about.sass"
//${Skills(t.skills, locale.skills)}
export default (t, locale) => {
    return /*html*/ `
        ${About(t.about)}
        ${Facts(t.facts)}
    `;
};
