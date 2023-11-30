import media from "@/consts/media";
import MediaIcon from "@/components/MediaIcon";

export default (t) => {
    const mediaTexts = {
        email: "MunirahDu@gmail.com",
        phone: "+966 54 5023 287",
    };
    return /*html*/ `
    <sections class="contacts" id="contacts">
    <h2 class="h2">${t.title}</h2>
    <div class="contacts__content">
        <p class="contacts__description">${t.text}</p>
        <div class="contacts__media">
            <h3 class="contacts__title">${t.media}</h3>
            <div class="contacts__list">
                ${["email", "phone"].map((name) => `
                    <div class="contact-item">
                        ${MediaIcon({ name })} 
                        <span class="contact-text">${mediaTexts[name]}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    </div>
</sections>

    `;
};
