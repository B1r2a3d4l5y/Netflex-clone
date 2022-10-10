$(document).ready(function(){
    $("#questionBtn1 ").unbind("click").click(function(){
        // change icon button1 
        $(".bi " ).toggleClass( "bi-x , bi-plus");
       
        $("#what").animate({opacity:1}).toggle();
    });
    $("#questionBtn2").click(function(){
        // toggle icons button2
        $(".bi ").toggleClass("bi-x , bi-plus ")
        $(".cost").animate({opacity:1}).toggle()
    })
})