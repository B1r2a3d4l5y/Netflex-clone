$(document).ready(function(){
    $("#questionBtn1").click(function(){
        $("#what").animate({
            height:"+=100px",
            opacity:1
        })
        $("#what").show(1000).toggle()
        
    })
})