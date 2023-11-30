export default (t) => {
  return /*html*/ `
        <section class="about">
        <!--
            <div class="about__illustrations">
                <img src="/images/about-me.png" alt="" class="about__image">
            </div>
            -->
           
            <div class="about__text">
             <div class="path">
            <h1 class="h1 path__name">About Me</h1>
            <p class="path__description"></p>
          </div>
                ${t.description
                  .map(
                    (text) => /*html*/ `
                    <p class="about__description">${text}</p>
                `
                  )
                  .join("")}
                <ol>
                ${t.why
                  .map(
                    (text) => /*html*/ `
                    <li >${text}</li>
        
                    `
                  )
                  .join("")}
                    </ol>
            </div>
        </section>
    `;
};
