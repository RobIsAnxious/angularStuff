//button click
var button = document.getElementById('consoleButton');


function clickable(element){
    element.addEventListener("click", function() {
        console.log("The button was clicked");
    }, false);
}
clickable(button);

