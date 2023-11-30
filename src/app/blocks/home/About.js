export default (t) => {
  return /*html*/ `
        <section class="about">
            <div class="about__content">
                <h2 class="h2">${t.title}</h2>
                <div class="about__text">
                    ${t.description
                      .map(
                        (text) =>
                          /*html*/ `<p class="about__description">${text}</p>`
                      )
                      .join("")}
                </div>

                <a href="/about-me" class="button">${t.button} →</a> 
            </div>
            <div class= "about__right"">
          <img src="/images/about-me.png" alt="" class="about__image">
          <div class="about__des">
          Grace Hopper who invented the first compiler.
          </div>
          </div> 
        </section>
    `;
};
