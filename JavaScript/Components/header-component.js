class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
<style>
    header {
      background-image: url(../Images/three.jpg); 
       text-align: center;
         color: black;
}
</style>
<header class="p-5">
    <h1>Animal Kingdom</h1>
</header>
    `;
    }
}
customElements.define('header-component', Header);