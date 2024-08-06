const SIZE = 128;

class BasicCard extends HTMLElement {
  // <img src="https://avatars.githubusercontent.com/${name}?size=${SIZE}" alt="${name}">
  constructor() {
    super();
    const name = this.getAttribute("name");
    const src = this.getAttribute("src");
    const href = this.getAttribute("href");
    const html = /* html */`<div class="card">
      <img src="${src}" alt="${name}">
      <div>
      <span>${name}</span><br />
      ${href ? `<a href="${href}" target="_blank">Homepage</a>` : 'no hay link'}      
      </div>
    </div>`;
    this.insertAdjacentHTML("beforeend", html);
  }
}

customElements.define("basic-card", BasicCard);