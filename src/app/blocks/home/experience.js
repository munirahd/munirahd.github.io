export default (t, t2) => {
    return /*html*/ `
        <section class="experience">
            <div class="experience__header">
                <h2 class="h2">${t.title}</h2>
            </div>
            <div class="timeline">
                <div class="timeline__item">
                    <div class="timeline__content">
                        <h3>Computer Science Student</h3>
                        <span class="timeline__date">Sep 2019 - Nov 2023</span>
                        <p>Studied at XYZ University</p>
                    </div>
                </div>
                <div class="timeline__item">
                    <div class="timeline__content">
                        <h3>Software Engineer Intern – Digital Channels Team</h3>
                        <span class="timeline__date">July 2023 - Sep 2023</span>
                        <ul>
                            <li>Developed the new Human Capital internal Portal using SharePoint & Frontend tools/frameworks.</li>
                            <li>Tested a major financial analysis system in the bank's new mobile app, identifying microservice-related issues, documenting bugs in Jira, and cross-referencing with the related team.</li>
                            <li>Developed a dynamic Power BI dashboard for the Human Capital department.</li>
                            <li>Developed a candidate management system for the Digital Channels team using Nintex workflows.</li>
                            <li>Assisted with internal support, making modifications for departmental internal portals.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
};
