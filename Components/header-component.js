class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
<style>
    header {
     background-color: #08c9ff;
       text-align: center;
         color: white;
}
</style>
<header class="p-5">
    <h1>Webbutvecklingsprojekt</h1>
        <h4>Animal Kingdom</h4>
</header>
    `;
    }
}
customElements.define('header-component', Header);