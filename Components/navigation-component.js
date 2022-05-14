class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="startpage.html"><i class="fa-solid fa-house"></i> Hem</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="animals.html"> <i class="fa-solid fa-paw"></i> Djur</a>
                </li>
            </ul>
        </div>
    </nav>
      `;
    }
}
customElements.define('navigation-component', Navigation);