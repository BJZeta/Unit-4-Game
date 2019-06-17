$(document).ready(function () {
    var randomNum = Math.floor((100 * Math.random()) + 10);
    var purple = Math.floor((5 * Math.random()) + 1);
    var red = Math.floor((5 * Math.random()) + 1);
    var yellow = Math.floor((8 * Math.random()) + 1);
    var blue = Math.floor((8 * Math.random()) + 1);
    var playerScore = 0;
    var wins = 0;
    var loses = 0;
    var reset = function () {
        randomNum = Math.floor((100 * Math.random()) + 10);
        purple = Math.floor((5 * Math.random()) + 1);
        red = Math.floor((5 * Math.random()) + 1);
        yellow = Math.floor((8 * Math.random()) + 1);
        blue = Math.floor((8 * Math.random()) + 1);
        playerScore = 0;
        $("#total-score").empty(Text);
        $("#total-score").text(playerScore);
        $("#random-number").empty(Text);
        $("#random-number").text(randomNum);
    }

    $("#random-number").text(randomNum);
    $("#wins").text("Wins: " + wins);
    $("#loses").text("Loses: " + loses);
    $("#total-score").text(playerScore);

    $("#purple-crystal").on("click", function () {
        playerScore += purple;
        console.log(playerScore);
        $("#total-score").text(playerScore);
        checkScore();
    });

    $("#red-crystal").on("click", function () {
        playerScore += red;
        console.log(playerScore);
        $("#total-score").text(playerScore);
        checkScore();
    });

    $("#blue-crystal").on("click", function () {
        playerScore += blue;
        console.log(playerScore);
        $("#total-score").text(playerScore);
        checkScore();
    });

    $("#yellow-crystal").on("click", function () {
        playerScore += yellow;
        console.log(playerScore);
        $("#total-score").text(playerScore);
        checkScore();
    });

    var checkScore = function () {
        if (playerScore > randomNum) {
            loses = loses + 1;
            $("#loses").text("Loses: " + loses);
            reset();
        } else if (playerScore === randomNum) {
            wins = wins + 1;
            $("#wins").text("Wins: " + wins);
            reset();
        }
    }







});