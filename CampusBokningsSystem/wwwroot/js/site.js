// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let date = new Date();

$("#expandingDiv").hide();
$("#HiddenListItem").hide();
//function for dropdown parameter
$(document).ready(function () {
    $("#hideshowbutton").click(function () {
        $("#expandingDiv").toggle("slow");
    });
    $("#hideshowlistitem").click(function () {
        $("#HiddenListItem").toggle("slow");
    });

});


$(document).ready(function () {
    var span = document.getElementById('LiveTime');

    function time() {
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();
        span.textContent =
            ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
    }

    setInterval(time, 1000);
});