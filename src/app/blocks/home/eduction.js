export default (t, t2) => {
    return /*html*/ `
          <section class="eduction">
              <div class="eduction__header">
                  <h2 class="h2">${t.title}</h2>
              </div>
              <div class="timeline">
                  <div class="timeline__item">
                      <div class="timeline__content">
                      <h2 class="timeline__company">${t.company_name}</h2>
                          <h3>${t.eduction_title}</h3>
                          <span class="timeline__date">${t.eduction_date}</span>
                          <ul>
                          ${t.description
                            .map(
                              (text) =>
                                /*html*/ `<li class="eduction__description">${text}</li>`
                            )
                            .join("")}
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
      `;
  };        