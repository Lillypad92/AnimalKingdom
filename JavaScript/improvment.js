const button = document.getElementById("submitButton");
const paragraphs = document.createElement("p");

button.addEventListener("click", function(e){
    e.preventDefault();

    let hideSurvey = document.getElementById("hideMe");
    hideSurvey.style.display = "none";
   
});
