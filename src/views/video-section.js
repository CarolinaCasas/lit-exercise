import {LitElement, html} from 'lit';

export class VideoSection extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <p>video</p>
    <p>VideoSection ${this.version}</p>



    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/3lnf2ZD_25A?si=Uo671MvwPqFtvvEz&amp;controls=0&
    amp;&autoplay=1&amp;&loop=1" title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>-->
    `;
  }
}
customElements.define('video-section', VideoSection);