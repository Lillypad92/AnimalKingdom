class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .navbar-color {
          background-color: #f1ece9;
        }
        li, nav-item {
            padding: 4px;   
        }
        ul {
            font-weight: 500px
            margin: 0 25px;
            color: #fff;
            text-decoration: none; 
        }
        nav a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #f17fb6;
          }
        </style>

    <nav class="navbar navbar-expand-sm sticky-top navbar-color">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="start-page.html"><i class="fa-solid fa-house"></i> Hem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about-me.html"><i class="fa-solid fa-clipboard-user"></i> Om mig</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="animals.html"><i class="fa-solid fa-paw"></i> Djur</a>
        </li>
      </ul>
    </div>
  </nav>
      `;
    }
}
customElements.define('navigation-component', Navigation);