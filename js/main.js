
function dropdown() {
    document.getElementById("dropmenu").style.display = "block";
}

// Close the dropdown if the user clicks outside of it
var $document = $(document);

$document.ready(function () {

    $(".menu-button").on("click", function(e){
        e.preventDefault();
        $("#dropmenu").toggleClass("nav-opened");
        $("#dropmenu").toggleClass("nav-closed");
        $(".menu-button").toggleClass("colored");
        $(".dropdown:hover").toggleClass("colored");
    });


});
