const button = document.getElementById("submitButton");

button.addEventListener("click", function(e){
    e.preventDefault();

    let something = document.getElementById("hideME");
    something.style.display = "none";
});