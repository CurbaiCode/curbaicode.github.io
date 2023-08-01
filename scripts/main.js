(function($) {
    $.fn.tilt = function() {
        var perspective = "128px",
            delta = 20,
            width = this.width(),
            height = this.height(),
            midWidth = width / 2,
            midHeight = height / 2;
        $(this).addClass("is-out");
        this.on({
            mousemove: function(e) {
                var pos = $(this).offset(),
                    cursPosX = e.pageX - pos.left,
                    cursPosY = e.pageY - pos.top,
                    cursCenterX = midWidth - cursPosX,
                    cursCenterY = midHeight - cursPosY;

                $(this).css("transform", "scale(1.1) perspective(" + perspective + ") rotateX(" + (cursCenterY / delta) + "deg) rotateY(" + -(cursCenterX / delta) + "deg)");
                $(this).removeClass("is-out");
            },
            mouseleave: function() {
                $(this).addClass("is-out");
            }
        });
        return this;
    };
}(jQuery));
$(".tilt").tilt();

// Provide option for localization
function selectRedirect() {
    var curPage = window.location.pathname.split("/").slice(1).join("/").replace("es/", "");
    var curPageHTML = curPage.endsWith(".html");

    switch (document.getElementById("lang").value) {
        case "en":
            if (curPageHTML) {
                window.location = "/" + curPage.split("/").slice(1);
            } else {
                window.location = "/" + curPage;
            }
            console.log("EN", curpage);
            break;

        case "es":
            window.location = "/es/" + curPage;
            console.log("ES", curpage);
            break;

        default:
            window.location = "/"; // if no selection matches then redirected to home page
            break;
    }
}
