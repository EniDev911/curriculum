const SIZE = 128;

class BasicCard extends HTMLElement {
  // <img src="https://avatars.githubusercontent.com/${name}?size=${SIZE}" alt="${name}">
  constructor() {
    super();
    const name = this.getAttribute("name");
    const src = this.getAttribute("src");
    const href = this.getAttribute("href");
    const html = /* html */`<div class="card" onclick="window.location.href = '${href}'">
      <img src="${src}" alt="${name}">
      <span>${name}</span>
    </div>`;
    this.insertAdjacentHTML("beforeend", html);
  }
}

customElements.define("basic-card", BasicCard);