import Dots from "@/components/Dots";

export default (t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">                    
                ${t.description.map(
                    (text) =>
                        /*html*/ `<p class="hero__description">${text}</p>`
                ).join("")}
                </div>
               <!-- <a class="button button__primary" href="#contacts">${t.button}</a> -->
            </div>
            <div class="hero__illustrations">
            <div class="hero__right">
               <!-- <img src="/images/logo-outline.svg" alt="" class="hero__logo">-->
              
                <img src="/images/hero1.png" alt="Elias" class="hero__image">
                <div class="hero__des">
                Ada Lovelace the world's first computer programmer
                </div>
                </div>
                <div class="hero__status">${t.status} <a href="">Portfolio</a></div>
               <!-- ${Dots({})} -->
            </div>
        </section>
    `;
};
