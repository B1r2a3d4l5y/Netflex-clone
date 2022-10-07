$(document).ready(function(){
    $("#questionBtn1 ").click(function(){
        $(".faq-button-icon" ).toggle();
        $("i ", this).toggle("bi bi-plus, bi bi-x")
        $("#what").animate({opacity:1}).toggle()
    })
})