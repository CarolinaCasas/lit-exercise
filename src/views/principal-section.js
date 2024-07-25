import {LitElement, html} from 'lit';

export class PrincipalSection extends LitElement {
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
customElements.define('principal-section', PrincipalSection);