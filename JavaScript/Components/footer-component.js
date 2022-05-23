class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
      this.innerHTML = `
      <style>
        footer {
          background-color:#f1ece9;
        }
      </style>
        <footer class="text-center text-lg-start">  
    <section>
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fa-solid fa-paw"></i> Animal Kingdom
            </h6>
            <p><i>
            “It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty; the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living.” <br>
            - David Attenborough
            </i></p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
            <p><i class="fas fa-home me-3"></i> Hittepaadress</p>
            <p>
              <i class="fas fa-envelope me-3"></i> info@animalkingdom.se
            </p>
            <p><i class="fas fa-phone me-3"></i> (hittepa)</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
        `;

    }
}
customElements.define('footer-component', Footer);