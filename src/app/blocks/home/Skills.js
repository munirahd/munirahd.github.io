import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

export default (t, t2) => {
  return /*html*/ `
      <section class="skills">
      <div class="skills__header">
        <h2 class="h2"><span>${t.title}</span></h2>
        </div>
        <div class="skills__content">
          <div class="skills__category">
            <h3>${t.language}</h3>
            <ul>
              ${Object.entries(t.languageList)
                .map(
                  ([language, imageUrl]) => /*html*/ `
                  <li>
                    <img src="${imageUrl}" alt="The logo icon for ${language}" title="${language}"> 
                    <p>${language}</p>
                  </li>`
                )
                .join("")}
            </ul>
          </div>

          <!-- Repeat for other categories like databases, tools, etc. -->
          
          <div class="skills__category">
          <h3>${t.webTechnologiesAndFrameworks}</h3>
          <ul>
            ${Object.entries(t.webTechnologiesAndFrameworksList)
              .map(
                ([webTechnologiesAndFrameworks, imageUrl]) => /*html*/ `
                <li>
                  <img src="${imageUrl}" alt="The logo icon for ${webTechnologiesAndFrameworks}" title="${webTechnologiesAndFrameworks}"> 
                  <p>${webTechnologiesAndFrameworks}</p>
                </li> `
              )
              .join("")}
          </ul>
        </div>

          <div class="skills__category">
          <h3>${t.databaseCloud}</h3>
          <ul>
            ${Object.entries(t.databaseCloudList)
              .map(
                ([databaseCloud, imageUrl]) => /*html*/ `
                <li>
                  <img src="${imageUrl}" alt="The logo icon for ${databaseCloud}" title="${databaseCloud}">
                  <p>${databaseCloud}</p>
                </li>`
              )
              .join("")}
          </ul>
        </div>

        <div class="skills__category">
        <h3>${t.DevOpsAndTools}</h3>
        <ul>
          ${Object.entries(t.DevOpsAndToolsList)
            .map(
              ([DevOpsAndTools, imageUrl]) => /*html*/ `
              <li>
                <img src="${imageUrl}" alt="The logo icon for ${DevOpsAndTools}" title="${DevOpsAndTools}">
                <p>${DevOpsAndTools}</p>
              </li>`
            )
            .join("")}
        </ul>
      </div>
        
        </div>
      </section>
    `;
};
