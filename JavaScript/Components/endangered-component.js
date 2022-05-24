class Endangered extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var link = this.getAttribute("data-link");
        var header = this.getAttribute("data-header");
        var description = this.getAttribute("data-description");
        var css = this.getAttribute("data-css");
        var img = this.getAttribute("data-img");

        this.innerHTML = `
        <style>
           .alert-success {
               
           } 
        </style>

        <div class="` + css + `">
        <div class="col-sm">
            <img src="` + img + `" alt="LOGGA RED LIST"/>
        </div>
        <div class="col-sm">
            <b>` + header + `</b>
            <p>` + description + `</p>
        </div>
        <div class="col-sm">
            <a href="` + link + `">Lär mer -></a>
        </div>
    </div>`;
    }
}
customElements.define('endangered-component', Endangered);