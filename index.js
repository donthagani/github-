$(".drum").click(function(){
    var clickButtons = $(this).attr("id");
    var audio = new Audio("sounds/" + clickButtons + ".mp3");
    audio.play();
})