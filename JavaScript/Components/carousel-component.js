class Carousel extends HTMLElement {
    constructor() {
        super();
    }
    // Funktion för att skapa upp kortkomponent med parameter, data för nuvarande djur. Returnerar HTML element med komponent.
    createAnimalCard(currentAnimal) {
        return '<div class="col-md-4 mb-3">' +
            '<card-component data-link="' + currentAnimal.Link + '" data-img="' + currentAnimal.ImageSrc + '" data-header="' + currentAnimal.Header + '" data-description="' + currentAnimal.Description + '"></card-component>' +
            '</div>';;
    }
    //Funktion som returnerar HTML för en carousel row.
    createAnimalRow(animalRowIndex, currentAnimals) {

        //Variabeln active finns för att Bootstrap carousel behöver veta att en row ska ha en klass active. 
        var active = "";
        if (animalRowIndex === 0) {
            active = "active";
        }

        var animalRow = "";
        animalRow += '<div class="carousel-item ' + active + '">' +
            '<div class="row">';

        for (var animalIndex = 0; animalIndex < currentAnimals.length; animalIndex++) {
            animalRow += this.createAnimalCard(currentAnimals[animalIndex]);
        }

        animalRow += '</div></div>';
        return animalRow;
    }

    connectedCallback() {

        // Deklarerat header och id, hämtat upp datatyperna genom getAttribute.
        var header = this.getAttribute("data-header");
        var id = this.getAttribute("data-id");

        //Behöver använda JSON.parse för att få tillbaka en array istället för en sträng. 
        //Data-animals kommer ifrån sidan animal.html (carousel-component) där data-animals är en array som håller fler arrayer. 
        var allAnimals = JSON.parse(this.getAttribute("data-animals"));

        var carouselRows = "";

        for (var index = 0; index < allAnimals.length; index++) {
            carouselRows += this.createAnimalRow(index, allAnimals[index]);
        }

        this.innerHTML = `    <section class="pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h3 class="mb-3">` + header + `</h3>
                </div>
                <div class="col-6 text-right">
                    <a class="btn btn-primary mb-3 mr-1" href="#` + id + `" role="button" data-slide="prev">
                        <i class="fa fa-arrow-left"></i>
                    </a>
                    <a class="btn btn-primary mb-3 " href="#` + id + `" role="button" data-slide="next">
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
                <div class="col-12">
                    <div id="` + id + `" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">` +
            carouselRows +
            `</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;

    }
}
customElements.define('carousel-component', Carousel);