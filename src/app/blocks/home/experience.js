export default (t, t2) => {
  return /*html*/ `
        <section class="experience">
            <div class="experience__header">
                <h2 class="h2">${t.title}</h2>
            </div>
            <div class="timeline">
                <div class="timeline__item">
                    <div class="timeline__content">
                    <h2 class="timeline__company">${t.company_name}</h2>
                        <p>${t.experience_title}   <span class="timeline__date">${t.experience_date}</span></p>
                      
                        <ul>
                        ${t.description
                          .map(
                            (text) =>
                              /*html*/ `<li class="experience__description">${text}</li>`
                          )
                          .join("")}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
};        