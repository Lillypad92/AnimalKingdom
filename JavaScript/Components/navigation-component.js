class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <style>
    ul {
        padding: 2px;   
    }
    a {
        font-weight: 500;
        margin: 0 25px;
        color: #fff;
        text-decoration: none;
        
    }
    a:hover {
        padding-bottom: 5px;
        box-shadow: inset 0 -2px 0 0 #f17fb6;
      }
    
    </style>
    <nav class="navbar navbar-expand-sm bg-light sticky-top">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="start-page.html"><i class="fa-solid fa-house"></i> Hem</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="about-me.html"> <i class="fa-solid fa-clipboard-user"></i> Om mig</a>
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