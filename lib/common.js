$(function () {
    $('.nav li.fir').mouseenter(function () {
        // $(this).find('ul').css({"display":"block"});
        console.log(1)
        $(this).find('ul').css({"opacity":"1"});
    })
        .mouseleave(function () {
            $(this).find('ul').css({"opacity":"0"});
        })

})