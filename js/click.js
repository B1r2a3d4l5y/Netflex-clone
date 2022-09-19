$document.ready(function(){
    $("#questionBtn1").click(function(){
        $("#what").animate({opacity:1, height:"+=100px"});
    });
    $("#what").toggle()
})