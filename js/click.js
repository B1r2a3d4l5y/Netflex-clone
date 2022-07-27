$(document).ready(function(){
    $("#questionBtn1").click(function(){
        $("#what").animate({
            height: "+=100px"
        });
        $("#what").toggle();
     
    });
    $("#costBtn").click(function(){
        $("#cost_anwser").animate({
            height: "+=100px"
        });
        $("#cost_anwser").toggle();
    });
    $("#watchBtn").click(function(){
        $("#where_to_watch").animate({
            heigth: "+=100px",
        });
        $("#where_to_watch").toggle()
    });
  $("#cancelBtn").click(function(){
    $(".cancel").animate({
        height: "+=100px"
    });
    $(".cancel").toggle()
  });
  $(".watchBtn").click(function(){
    $(".what_to_watch").animate({
        height: "+=100px"
    });
    $(".what_to_watch").toggle()
  });
  $(".kidsBtn").click(function(){
    $(".kids_content").animate({
        height: "+=100px"
    });
    $(".kids_content").toggle()
  })
}) 
