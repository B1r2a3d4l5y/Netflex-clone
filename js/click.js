$(document).ready(function(){
    $("#questionBtn1").on('click', function(){
        // change icon
        $(".icon-plus").toggleClass("bi-plus, bi-x");
       // show hidden text
       $("#what").animate({opacity:1}).toggle()    
       
    });
    $("#questionBtn2").on('click', function(){
        // change icon button2
        $(".icon-plus-2").toggleClass("bi-plus, bi-x");
        //show/toggle hidden text button2
        $(".cost").animate({opacity:1}).toggle()

    })
})