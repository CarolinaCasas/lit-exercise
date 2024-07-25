import {LitElement, html} from 'lit';
import  './info-section';
import './photo-section';
import './video-section';
import './principal-section';
import '../components/menu-page';

export class GeneralView extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <menu-page></menu-page>
    <principal-section></principal-section>
    <info-section></info-section>
    <photo-section></photo-section>
    <video-section></video-section>
    `;
  }
}
customElements.define('general-view', GeneralView);