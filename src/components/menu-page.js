import {LitElement, html, css} from "lit";
import {TWStyles} from "../output.js";

export class MenuPage extends LitElement {

    static styles = [css`
    .hidden { display: none; }
    .block { display: block; }
    @media (min-width: 720px) {
      .hidden { display: block; }
      .block { display: none; }
    }
  `, TWStyles];


static get properties() {
    return { menuOpen: { type: Boolean } };
  }

  constructor() {
    super();
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
    <section class="bg-metal">
         <div class="w-5 h-5 bg-midnight"></div>
    <div class="w-full bg-gray-100 text-white p-4">
        <div class="flex justify-between items-center">
          <div class="text-lg font-bold">
            <h1 md:space-x-8 class="bg-amber-90">Marlex Brando</h1>
            <h4>Artista Audiovisual</h4>
            </div>
          <button @click=${this.toggleMenu} class="block md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav class="${this.menuOpen ? 'block' : 'hidden'} md:block">
          <ul class="mt-4 md:flex md:space-x-4">
            <li><a href="#" class="p-2">Inicio</a></li>
            <li><a href="#" class="p-2">Servicios</a></li>
            <li><a href="#" class="p-2">Acerca de</a></li>
            <li><a href="#" class="p-2">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </section>
    `;
  }
}
customElements.define('menu-page', MenuPage);