export default class SmoothScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.currentTarget.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView(this.options);

    /* //Forma alternativa
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    }); */
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
