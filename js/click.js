$(document).ready(function(){
    $("#questionBtn1 ").click(function(){
        // change icon  
            $(".bi").toggleClass("bi-x bi-plus ").style = "bi-x font-size: 25px"
       
        $("#what").animate({opacity:1}).toggle()
    })
})