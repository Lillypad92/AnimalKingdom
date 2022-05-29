class Breadcrumb extends HTMLElement {
  constructor() {
    super();
  }

  createLinks(links){

    var textInTheMiddle = "";

    for(var i = 0; i < links.length; i++){
      var link = links[i];

      if(link.Active === "false"){
        textInTheMiddle += '<li class="breadcrumb-item"><a href="' + link.Href  +'">' + link.Text + '</a></li>';
      }else if(link.Active === "true"){
        textInTheMiddle += '<li class="breadcrumb-item active" aria-current="page">' + link.Text + '</li>';
      }
    }

    return textInTheMiddle;
  }

  connectedCallback() {

    var links = JSON.parse(this.getAttribute("data-links"));

    this.innerHTML = `
    <style>
    .breadcrumb {
      background-color:white;
    }
    
    </style>    
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-center">` + 
          this.createLinks(links) + 
          `</ol>
    </nav>
        
        `;
  }
}
customElements.define('breadcrumb-component', Breadcrumb);