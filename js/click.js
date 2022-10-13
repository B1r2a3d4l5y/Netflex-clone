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
        $(".cost").animate({opacity:1}).toggle();

    });
    // questionbutton 3
    $("#questionBtn3").on('click', function(){
        // change icon
        $(".icon-plus-3").toggleClass("bi-plus, bi-x");
        // toggle hidden text
        $("#watch_anywhere").animate({opacity:1}).toggle();
    });
    // questionBtn4
    $(".questionBtn4").on('click', function(){
        // change icon
        $(".icon-plus-4").toggleClass("bi-plus, bi-x");
        // toggle text 
        $("#cancel").animate({opacity:1}).toggle();

    });
    // questionBtn 5
    $("#questionBtn5").on('click', function(){
        // change icon for questionBtn5 
        $(".icon-plus-5").toggleClass("bi-plus, bi-x");
        // toggle hiidden text for questionBtn5
        $("#what_can_i_watch").animate({opacity:1}).toggle()

    })

})