class PeopleCard extends HTMLElement {
  peopleImage;
  peopleComment;
  peopleName;
  peopleJob;
  constructor() {
    super();

    this.peopleImage = this.getAttribute("data-peopleImage");
    this.peopleComment = this.getAttribute("data-peopleComment");
    this.peopleName = this.getAttribute("data-peopleName");
    this.peopleJob = this.getAttribute("data-peopleJob");

    this.setAttribute('class', 'people__card');
    this.innerHTML = `
      <div class="people__img">
        <img src="${this.peopleImage}" alt="">
      </div>
      <div class="people__desc">
        <div class="people__comment">
          ${this.peopleComment}
        </div>
        <div class="people__id">
          <div class="people__name">
            ${this.peopleName}
          </div>
          <div class="people__job">
            ${this.peopleJob}
          </div>
        </div>
      </div>
    `
  }
}
customElements.define("people-card", PeopleCard);
