
$(document).ready(function(){

    $("#intro").fadeIn(1000).delay(1000)
    $("#introBtn").fadeIn(1000).delay(1000)
 
});

function startInstall() {
    $("#introBtn").fadeOut(500);
    $("#intro").fadeOut(function(){
        $("#load").fadeIn(1000);
        $(".loader").fadeIn(1000);
    });
}

function finished(){
    
    $("#load").fadeOut(function(){
        $(".loader").fadeOut(1000);
        $("#done").fadeIn(1000).delay(2000).fadeOut(function(){

            $("#close").fadeIn(1000);

        });
    });

}
