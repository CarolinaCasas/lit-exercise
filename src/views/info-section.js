import {LitElement, html} from 'lit';

export class InfoSection extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <p>InfoSection</p>
    <p>InfoSection ${this.version}</p>
    `;
  }
}
customElements.define('info-section', InfoSection);