class CatCard extends HTMLElement {
  catName;
  catImage;
  catTag;
  constructor() {
    super();
    this.catName = this.getAttribute("data-catName");
    this.catImage = this.getAttribute("data-catImage");
    this.catTag = this.getAttribute("data-catTag");

    this.setAttribute('class', 'cat__card');

    this.innerHTML = `
      <div class="cat__image">
        <img src="${this.catImage}" alt="${this.catName}">
      </div>
      <div class="cat__desc">
        <div class="cat__name">
          ${this.catName}
        </div>
        <div class="cat__tag">
          ${this.catTag}
        </div>
      </div>
    `
  }
}

customElements.define("cat-card", CatCard);
