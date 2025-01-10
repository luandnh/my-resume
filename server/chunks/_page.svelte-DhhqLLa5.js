import { c as pop, e as ensure_array_like, p as push } from './index-BcvDYVOv.js';
import { e as escape_html } from './escaping-BQR1pbqy.js';

function AboutMe($$payload) {
  $$payload.out += `<p>I'm <span class="fw-bold">Luan</span>, an experienced full-stack developer specializing in a range of technologies.
    I am currently working on developing solutions in the areas of contact center and call
    center functionality as well as API microservices, streaming platforms and their
    integration with machine learning applications.</p> <p>My career has been characterized by a tireless pursuit of improving my skills. I
    actively work on mastering new technologies like Svelte, JavaScript, Docker,
    Continuous Integration/Continuous Deployment (CI/CD) practices, and Jenkins to improve
    my skills as a full-stack developer.</p>`;
}
function Certificates($$payload) {
  $$payload.out += `<div class="row"><div class="col-12 col-lg-6"><div class="case-item box box-inner"><img class="case-item__icon" src="images/project.png" alt=""> <div><h3 class="title title--h3">Agile Project Management</h3> <div class="case-item__caption"><div>University of Colorado Boulder</div> <div>Issued Oct 2024</div> <div>Credential ID 6WK2LTFUL5GL</div> <div><a href="https://www.coursera.org/account/accomplishments/records/6WK2LTFUL5GL" target="_blank">View Certificate</a></div></div></div></div></div> <div class="col-12 col-lg-6"><div class="case-item box box-inner"><img class="case-item__icon" src="images/project.png" alt=""> <div><h3 class="title title--h3">Project Management Specialization</h3> <div class="case-item__caption"><div>University of Colorado Boulder</div> <div>Issued Oct 2024</div> <div>Credential ID SE2T1RO2AIJT</div> <div><a href="https://www.coursera.org/account/accomplishments/specialization/SE2T1RO2AIJT" target="_blank">View Certificate</a></div></div></div></div></div></div>`;
}
function Education($$payload) {
  $$payload.out += `<div class="timeline"><article class="timeline__item"><h5 class="title title--h4 timeline__title">Master Software Engineering</h5> <span class="timeline__period">May 2024 — Dec 2025</span> <p class="timeline__description">FPT School of Business &amp; Technology (FSB)</p></article> <article class="timeline__item"><h5 class="title title--h4 timeline__title">Bachelor of Information Assurance</h5> <span class="timeline__period">Oct 2016 — May 2020</span> <p class="timeline__description">FPT University</p></article></div>`;
}
function Sidebar($$payload) {
  $$payload.out += `<div class="sidebar box-outer sticky-column"><div class="sidebar__base-info"><figure class="avatar-box"><img src="images/my-avatar.png" alt="Hoàng Luân"></figure> <div class="text-xl-center"><h3 class="title title--h3 sidebar__name">Hoàng Luân</h3> <div class="badge">Backend Developer</div></div> <button class="btn btn--small btn--icon-right sidebar__btn js-btn-toggle"><span>Show Contacts</span><i class="feathericon-chevron-down"></i></button></div> <div class="sidebar__additional-info js-show"><div class="separation"></div> <ul class="details-info"><li class="details-info__item"><span class="box icon-box"><i class="font-icon icon-envelope"></i></span> <div class="contacts-block__info"><span class="overhead">Email</span> <a class="text-overflow" href="mailto:luandnh98@gmail.com" title="luandnh98@gmail.com">luandnh98@gmail.com</a></div></li> <li class="details-info__item"><span class="box icon-box"><i class="font-icon icon-phone"></i></span> <div class="contacts-block__info"><span class="overhead">Phone</span> <span class="text-overflow" title="0899 452 898">0899 452 898</span></div></li> <li class="details-info__item"><span class="box icon-box"><i class="font-icon icon-calendar"></i></span> <div class="contacts-block__info"><span class="overhead">Birthday</span> <span class="text-overflow" title="March 3, 1998">March 3, 1998</span></div></li> <li class="details-info__item"><span class="box icon-box"><i class="font-icon icon-location"></i></span> <div class="contacts-block__info"><span class="overhead">Location</span> <span class="text-overflow" title="Ho Chi Minh, Vietnam">Ho Chi Minh, Vietnam</span></div></li></ul> <div class="separation d-xl-none"></div> <div class="social"><a class="social__link" href="https://github.com/luandnh" aria-label="GitHub"><i class="feathericon-github"></i></a> <a class="social__link" href="https://www.linkedin.com/in/luandnh/" aria-label="Linkedin"><i class="feathericon-linkedin"></i></a> <a class="social__link" href="https://www.facebook.com/luandnh98" aria-label="Facebook"><i class="feathericon-facebook"></i></a></div> <div class="separation d-xl-none"></div> <div class="justify-content-center text-center mt-3"><a class="btn" href="docs/LuanDNH-BackendEngineer.pdf" target="_blank" aria-label="Download CV"><span class="btn__text">Download CV</span> <span class="btn__icon"><i class="font-icon icon-download"></i></span></a></div></div></div>`;
}
function Skills($$payload) {
  $$payload.out += `<div class="box box-inner mb-0"><div class="row"><div class="col-lg-6"><p class="fw-bold">Backend</p> <ul><li>Golang, Gin, Bun</li> <li>Rest APIs, gRPC, Websocket</li></ul> <p class="fw-bold">Database</p> <ul><li>PostgreSQL, MySQL, MariaDB</li> <li>Elasticsearch, MongoDB</li></ul> <p class="fw-bold">Caching</p> <ul><li>Redis</li> <li>Memcache</li></ul> <p class="fw-bold">CI/CD</p> <ul><li>Github Action</li> <li>Jenkins</li></ul></div> <div class="col-lg-6"><p class="fw-bold">Message Queue</p> <ul><li>Redis PubSub</li> <li>RabbitMQ</li></ul> <p class="fw-bold">Other</p> <ul><li>Docker, Portainer</li> <li>Traefik</li> <li>Debezium</li> <li>Sentry</li></ul> <p class="fw-bold">Frontend</p> <ul><li>Svelte, SvelteKit, SvelteStrap</li> <li>Bootstrap 5</li> <li>HTML5, CSS3</li></ul></div></div></div>`;
}
function ToggleMode($$payload, $$props) {
  push();
  $$payload.out += `<div class="justify-content-center"><a href="javascript:void(0)" class="h4" aria-label="Toggle Mode" id="toggle-mode"><i class="feathericon-moon"></i></a></div>`;
  pop();
}
function WorkExperience($$payload) {
  const each_array = ensure_array_like([
    "Microservices",
    "Docker",
    "Go",
    "Gin",
    "Websocket",
    "Svelte",
    "SvelteKit",
    "Bootstrap 5.3",
    "Typescript",
    "PostgreSQL",
    "Elasticsearch 7",
    "RabbitMQ",
    "Redis"
  ]);
  const each_array_1 = ensure_array_like([
    "Microservices",
    "Docker",
    "Go",
    "Gin",
    "Svelte",
    "SvelteKit",
    "Bootstrap 5.3",
    "Typescript",
    "PostgreSQL",
    "Elasticsearch 7",
    "RabbitMQ",
    "Redis (PubSub)"
  ]);
  const each_array_2 = ensure_array_like([
    "Docker",
    "Go",
    "Python",
    "Websocket",
    "Tensorflow",
    "Machine Learning"
  ]);
  const each_array_3 = ensure_array_like([
    "Microservices",
    "Docker",
    "Go",
    "Gin",
    "Websocket",
    "PostgreSQL",
    "Elasticsearch 7",
    "RabbitMQ",
    "Redis",
    "MinIO"
  ]);
  const each_array_4 = ensure_array_like(["C#", ".Net Core", "SQL Server"]);
  $$payload.out += `<article class="timeline__item"><h3 class="title title--h3 timeline__title">TEL4VN</h3> <span class="timeline__period">2020 — Feb 2025</span> <div class="timeline__description mb-2"><span class="fw-bold">TEL4VN</span> is a leading company specializing in telecommunications solutions
		such as callcenter, autocall, and contact center services. With expertise in integrating automated
		call distribution systems, CRM integration, and multi-channel management, our call center solutions
		are designed to optimize employee efficiency and enhance customer interaction. Our autocall technology
		streamlines communication processes, while our contact center solutions seamlessly integrate multiple
		channels.</div> <div class="ms-2"><h4 class="title title--h4">Technical Architect</h4> <div class="mb-2"><span class="timeline__period">2023 — Present</span></div> <span class="fw-bold">Responsibilities:</span> <ul><li>Lead the analysis and design of project technology solutions, including requirements
				management and risk assessment.</li> <li>Build and maintain software system architecture to ensure scalability, performance and
				security.</li> <li>Work closely with development teams and project management to ensure accurate and efficient
				delivery of system architecture.</li> <li>Ensure compliance with technical standards and processes, including driving innovation and
				adopting advanced development methodologies.</li> <li>Lead the creation of technical guides and documentation and provide guidance and support to
				the development team.</li></ul></div> <div class="ms-2"><h4 class="title title--h4">Fullstack Developer + Team Leader</h4> <div class="mb-2"><span class="timeline__period">2020 — 2023</span></div> <span class="fw-bold">Responsibilities:</span> <ul><li>Develop and maintain front-end and back-end components of web applications</li> <li>Implement responsive design principles to ensure the app is accessible on different devices
				and screen sizes.</li> <li>Design and develop RESTful APIs to facilitate communication between front-end and back-end
				systems.</li> <li>Write clean, efficient, and maintainable code according to best practices and coding
				standards.</li> <li>Perform testing and debugging to quickly identify and resolve issues.</li> <li>Stay up to date on new technologies and trends in full-stack development.</li></ul></div> <span class="fw-bold">Products / Projects:</span> <ul><li class="mb-1"><div class="mb-2"><span class="fw-bold">Pitel Callcenter (CCP):</span> Crafted by our talented team, CCP is a state-of-the-art
				call center solution designed to meet the varied needs of businesses seeking efficient and impactful
				customer communication platforms. Powered by cutting-edge technology and a user-focused approach,
				CCP provides a comprehensive suite of features that streamline call handling, boost agent performance,
				and elevate customer satisfaction.</div> <div><span class="fw-bold">Technologies:</span></div> <div><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tech = each_array[$$index];
    $$payload.out += `<span class="badge fw-bold me-1 mb-2">${escape_html(tech)}</span>`;
  }
  $$payload.out += `<!--]--></div></li> <li class="mb-1"><div class="mb-2"><span class="fw-bold">Pitel Autocall:</span> Our team has meticulously developed an innovative
				autocall solution to revolutionize outbound communication strategies for businesses. With a focus
				on efficiency, scalability, and user-friendliness, this solution is designed to transform the
				way companies engage with their customers.</div> <div><span class="fw-bold">Technologies:</span></div> <div><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let tech = each_array_1[$$index_1];
    $$payload.out += `<span class="badge fw-bold me-1 mb-2">${escape_html(tech)}</span>`;
  }
  $$payload.out += `<!--]--></div></li> <li class="mb-1"><div class="mb-2"><span class="fw-bold">Pitel VMD:</span> Pitel VMD is an innovative solution developed by our
				team. It integrates real-time streaming and machine learning to detect voicemail greetings during
				live calls. By analyzing audio streams in real-time, this cutting-edge technology allows businesses
				to dynamically adjust call handling and optimize agent workflows. This enhances productivity
				and campaign efficiency.</div> <div><span class="fw-bold">Technologies:</span></div> <div><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let tech = each_array_2[$$index_2];
    $$payload.out += `<span class="badge fw-bold me-1 mb-2">${escape_html(tech)}</span>`;
  }
  $$payload.out += `<!--]--></div></li> <li class="mb-1"><div class="mb-2"><span class="fw-bold">FinS Collection:</span> FinS Collection is a platform that streamlines
				and optimizes debt collection for financial institutions. Utilizing a microservices architecture,
				this scalable solution provides a modular approach to debt recovery, empowering institutions
				to effectively manage and recoup outstanding debts while maintaining operational efficiency.</div> <div><span class="fw-bold">Technologies:</span></div> <div><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let tech = each_array_3[$$index_3];
    $$payload.out += `<span class="badge fw-bold me-1 mb-2">${escape_html(tech)}</span>`;
  }
  $$payload.out += `<!--]--></div></li></ul></article> <article class="timeline__item"><h5 class="title title--h4 timeline__title">Wisky</h5> <span class="timeline__period">Dec 2019 - Jun 2020</span> <h4 class="title title--h4">Intern Full Stack Developer</h4> <span class="fw-bold">Responsibilities:</span> <ul><li>Develop and maintain front-end and back-end components of web applications</li> <li>Design and develop RESTful APIs to facilitate communication between front-end and back-end
			systems.</li> <li>Write clean, efficient, and maintainable code according to best practices and coding
			standards.</li></ul> <div><span class="fw-bold">Technologies:</span></div> <div><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let tech = each_array_4[$$index_4];
    $$payload.out += `<span class="badge fw-bold me-1 mb-2">${escape_html(tech)}</span>`;
  }
  $$payload.out += `<!--]--></div></article>`;
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<main class="main"><div class="container gutter-top gutter-bottom"><div class="row sticky-parent"><aside class="col-12 col-md-12 col-xl-3">`;
  Sidebar($$payload);
  $$payload.out += `<!----></aside> <div class="col-12 col-md-12 col-xl-9"><div class="box-outer"><div class="nav-container">`;
  ToggleMode($$payload);
  $$payload.out += `<!----></div> <div class="pb-0 pb-sm-2"><h1 class="title title--h1 title__separate">About Me</h1> `;
  AboutMe($$payload);
  $$payload.out += `<!----></div> <h2 class="title title--h2"><span class="box icon-box"><i class="font-icon feathericon-book-open"></i></span> Education</h2> `;
  Education($$payload);
  $$payload.out += `<!----> <h2 class="title title--h2"><span class="box icon-box"><i class="font-icon feathericon-briefcase"></i></span> Experience</h2> `;
  WorkExperience($$payload);
  $$payload.out += `<!----> <h2 class="title title--h2 mt-3"><span class="box icon-box"><i class="font-icon feathericon-file"></i></span> Certificates</h2> `;
  Certificates($$payload);
  $$payload.out += `<!----> <h2 class="title title--h2 mt-3"><span class="box icon-box"><i class="font-icon feathericon-code"></i></span> My Skills</h2> `;
  Skills($$payload);
  $$payload.out += `<!----></div></div></div></div></main>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DhhqLLa5.js.map
