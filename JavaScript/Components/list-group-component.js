class AboutAnimal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var length = this.getAttribute("data-length");
        var habitat = this.getAttribute("data-habitat");
        var weight = this.getAttribute("data-weight");
        var age = this.getAttribute("data-age");
        var family = this.getAttribute("data-family");

        this.innerHTML =`
        <style>
        
        </style>

        <div class="list-group-info">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between">
                Familj
                <span>`+ family +`</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                Habitat
                <span>`+ habitat +`</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                Vikt
                <span>`+ weight +`</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                Ålder
                <span>`+ age +`</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                Längd
                <span>` + length +`</span>
            </li>
        </ul>
    </div>
    `;
    }





}
customElements.define('about-animal-component', AboutAnimal);