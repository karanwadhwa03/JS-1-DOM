//preloader
$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
    })
//preloader
active=1;
var player1score=0;
var player2score=0;

$(".rolldice").click(function(){
    $(".one").removeClass("active");
    $(".two").removeClass("active");
    if(active==1){
    $(".one").addClass("active");
    if(player1score>100)
    {   
        
        return;
    }
}
    else{
    $(".two").addClass("active");
    if(player2score>100){
    
    
    return;
    }
    }
    var x=Math.random();
    var y=Math.floor(x*6)+1;
    console.log(y)
    
    $(".dice").css("display","block");
    $("img").attr("src","images/dice-"+y+".png")


    if(y!=1){
        if(player1score<100 && player2score<100){
        if(active==1){
        player1score+=y; 
        $(".player-1-score").html("<h1>"+player1score+"</h1>")
        if(player1score>100)
        {   
            $(".playername-1").html("<h1>WINNER</h1>")
            $(".one").addClass("winner");
            return;
        }
        
        }
        else{
         player2score+=y;
         $(".player-2-score").html("<h1>"+player2score+"</h1>")

         if(player2score>100){
    
            $(".playername-2").html("<h1>WINNER</h1>")
            $(".two").addClass("winner");
        
            return;
            }  
       
        }}
        else{
            alert("WINNER");
        }
    }
    else{
        if(active==1){
        active=2;
        player1score=0
        $(".player-1-score").html("<h1>"+player1score+"</h1>")
        }
        else{
        active=1;
        player2score=0
                $(".player-2-score").html("<h1>"+player2score+"</h1>")

    }
    }
    
  }); 

$(".newgame").click(function(){
active=1;
player1score=0;
player2score=0;
$(".one").removeClass("active");
$(".two").removeClass("active");
$(".one").removeClass("winner");
$(".two").removeClass("winner");
$(".playername-2").html("<h1>PLAYER 2</h1>")
$(".playername-1").html("<h1>PLAYER 1</h1>")

$(".player-2-score").html("<h1>"+player2score+"</h1>")
$(".player-1-score").html("<h1>"+player1score+"</h1>")




})