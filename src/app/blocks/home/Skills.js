
import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

export default (t, t2) => {
    return /*html*/ `
        <sections class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__content">
                <div class="skills__list">
                    ${Object.keys(skills)
                        .filter(id => id !== "tool")
                        .map((id) => SkillBlock({ id }, t2))
                        .join("")}
                </div>

            </div>

        </sections>
    `;
};