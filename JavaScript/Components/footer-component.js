class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="text-center text-lg-start bg-light text-muted">  
    <section>
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Animal Kingdom
            </h6>
            <p>
              Någon roligt citat ifrån david attenburough kanske?
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Djur</h6>
            <p>
              <a href="#!" class="text-reset">Djur 1</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Djur 2</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Djur 3</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Djur 4</a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
            <p><i class="fas fa-home me-3"></i> Hittepaadress</p>
            <p>
              <i class="fas fa-envelope me-3"></i> info@animalkingdom.se
            </p>
            <p><i class="fas fa-phone me-3"></i> (hittepa)</p>
            <p><i class="fas fa-print me-3"></i> (hittepa)</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
        `;

    }
}
customElements.define('footer-component', Footer);