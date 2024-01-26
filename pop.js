
// When the user clicks on div, open the popup
function myFunction(id) {
    var popup = document.getElementById(id);
    console.log(popup)
    popup.classList.toggle("show");
}