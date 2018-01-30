
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
        $(".dropdown:hover").toggleClass("colored");
    });

    $(document).mouseup(function(e) {
        var menu = $(".menu-button");

        // if the target of the click isn't the container nor a descendant of the container
        if (!menu.is(e.target) && menu.has(e.target).length === 0) 
        {
            $("#dropmenu").toggleClass("nav-opened");
            $("#dropmenu").toggleClass("nav-closed");
            $(".dropdown").toggleClass("colored");
        }
    });

});
