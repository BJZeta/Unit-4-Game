$(document).ready(function () {
    var randomNum = Math.floor(Math.random() * 100);
    var purple = Math.floor(Math.random() * 5);
    var red = Math.floor(Math.random() * 5);
    var yellow = Math.floor(Math.random() * 20);
    var blue = Math.floor(Math.random() * 10);
    $("#random-number").append(randomNum);
    $("#purple-crystal").attr("value", purple);
    $("#red-crystal").attr("value", red);
    $("#blue-crystal").attr("value", blue);
    $("#yellow-crystal").attr("value", yellow);

    

     


    
});