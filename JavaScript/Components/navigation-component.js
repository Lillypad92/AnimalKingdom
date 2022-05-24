class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .navigation-color {
          background-color: #f1ece9;
        }
        .navigation-bar {
          justify-content: center;
        }
        .navigation-ul-list {
            font-size: large;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
            padding: 4px; 
        }
        .navigation-ul-list a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #f17fb6;
        }
      
        </style>

    <nav class="navbar navbar-expand-sm sticky-top navigation-color">
    <div class="collapse navbar-collapse navigation-bar" id="navbarNav">
      <ul class="navbar-nav navigation-ul-list">
        <li class="nav-item active">
          <a class="nav-link" href="start-page.html"><i class="fa-solid fa-house"></i> Hem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about-me.html"><i class="fa-solid fa-clipboard-user"></i> Om mig</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="animals.html"><i class="fa-solid fa-paw"></i> Djur</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="improvments.html"><i class="fa-solid fa-feather-pointed"></i> Förbättringsförslag</a>
      </li>
      </ul>
    </div>
  </nav>
      `;
  }
}
customElements.define('navigation-component', Navigation);