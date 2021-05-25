/*
let infoBlockArray = $(".info-block").toArray();

$(document)
    .ready(SetIdAndHide)
    .ready(CurrentTime)
    .ready(HideShowAdvancedSearch)
    .ready(HideShowElementOnInfoBlock);


function HideShowElementOnInfoBlock() {
    for (let i = 0; i < infoBlockArray.length; i++) {
        $('#buttonimg' + i).click(function () {
            $("#HiddenListItem" + i).toggle("slow");
        });
    }
}

function HideShowAdvancedSearch()
{
    let expandingDiv = $("#expandingDiv").hide();

    $("#hideshowbutton").click(function () {
        expandingDiv.toggle("slow");
    });
}
//Time shown on front page
function CurrentTime()
{
    var span = document.getElementById('LiveTime');
    let date = new Date();
    function time() {
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();
        span.textContent =
            ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
    }
    setInterval(time, 1000);
}
//give uniqe id for dropdown li and hide it, then sets buttonimg id
function SetIdAndHide() {
    let newChildAttribute;
    for (let i = 0; i < infoBlockArray.length; i++)
    {
        //set hidden element id
        newChildAttribute = infoBlockArray[i].children.item(3);
        newChildAttribute.id = "HiddenListItem" + i;
        $('#' + newChildAttribute.id).hide();

        //set arrow "buttonimg" id 
        newChildAttribute = infoBlockArray[i].children.item(4);
        newChildAttribute.firstElementChild.id = "buttonimg" + i;
    }
}*/