export default (t, t2) => {
    return /*html*/ `
      <section class="eduction">
          <div class="eduction__header">
              <h2 class="h2">${t.title}</h2>
          </div>
          <div class="eduction__list">
            ${t.eduction_list
              .map((text) => /*html*/ `<p>${text}</p>`)
              .join("")}
          </div>
          <h3>Courses</h3>
          <div class="eduction__list">
          ${t.eduction_list_courses
            .map((text) => /*html*/ `<p>${text}</p>`)
            .join("")}
        </div>

      </section>
    `;
  };
  