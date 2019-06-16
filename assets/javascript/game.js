$(document).ready(function () {
    var randomNum = Math.floor((100*Math.random())+10);
    var purple = Math.floor((5*Math.random()) + 1);
    var red = Math.floor(Math.random() * 5);
    var yellow = Math.floor(Math.random() * 20);
    var blue = Math.floor(Math.random() * 10);
    var playerScore = 0;
    
    $("#random-number").append(randomNum);
    $("#purple-crystal").attr("value", purple);
    $("#red-crystal").attr("value", red);
    $("#blue-crystal").attr("value", blue);
    $("#yellow-crystal").attr("value", yellow);
    // $("#total-score").attr("value", playerScore);
    $("#total-score").text(playerScore);

    $("#purple-crystal").on("click", function(){
        playerScore += purple;
        console.log(playerScore);
        $("#total-score").text(playerScore);
    });

    $("#red-crystal").on("click", function(){
        playerScore += red;
        console.log(playerScore);
        $("#total-score").text(playerScore);
    });

    $("#blue-crystal").on("click", function(){
        playerScore += blue;
        console.log(playerScore);
        $("#total-score").text(playerScore);
    });

    $("#yellow-crystal").on("click", function(){
        playerScore += yellow;
        console.log(playerScore);
        $("#total-score").text(playerScore);
    });




     


    
});