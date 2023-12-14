import routes from "@/consts/routes";
import MediaIcon from "./MediaIcon";
//
//const paths = ["/", "/projects", "/about-me", "/contacts"];
const paths = ["/", "/projects", "/about-me"];
const CVUrl = "https://drive.google.com/file/d/1WJXwF1rqWehvEvE5dle9lVV4Zf_ijDM9/view?usp=sharing";

export default (t) => {
  return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["linkedin","email", "github","phone"]
                      .map((name) => MediaIcon({ name }))
                      .join("")}
                </div>
            </div>

            <div class="container">
                <div class="header__inner">
                    <a class="logo" href="/">
                   <!--  <img class="logo__img" src="/images/logo.png" alt="Munirah logo"> --> 
                        <span class="logo__name">Munirah Alduraibi</span>
                    </a>
                    <div class="header__links">
                        ${paths
                          .map(
                            (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                              window.location.pathname === path
                                ? "header__link_active"
                                : ""
                            }">${t[routes[path].name]}</a>
                            `
                          )
                          .join("")}
                        <a href="${CVUrl}" class="header__link" target="_blank">CV 🪄</a> <!-- CV Button -->
                    </div>
                </div>
            </div>
        </header>
    `;
};