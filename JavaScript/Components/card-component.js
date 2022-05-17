class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var link = this.getAttribute("data-link");
        var header = this.getAttribute("data-header");
        var img = this.getAttribute("data-img");
        var description = this.getAttribute("data-description");

        this.innerHTML = `
        <a href="` + link + `">
        <div class="card">
        <img src="` + img + `" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title ">` + header + `</h5>
          <p class="card-text">` + description +`</p>
        </div>
      </div>
      </a>`;

    }
}
customElements.define('card-component', Card);
