export default (t, t2) => {
  return /*html*/ `
        <section class="experience">
            <div class="experience__header">
                <h2 class="h2">${t.title}</h2>
            </div>
            <div class="timeline">
                <div class="timeline__item">
                    <div class="timeline__content">
                        <h3>${t.experience_title}</h3>
                        <span class="timeline__date">${t.experience_date}</span>
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
