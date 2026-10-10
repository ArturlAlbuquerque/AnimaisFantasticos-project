import SmoothScroll from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initfetchAnimais from "./modules/fetch-animais.js";
import initfetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
smoothScroll.init();

initAnimationScroll();
const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initfetchAnimais();
initfetchBitcoin();
