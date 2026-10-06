export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.currentTarget.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* //Forma alternativa
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    }); */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
