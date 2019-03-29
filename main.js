 var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 255)"   
]
var squares = document.querySelectorAll(".square");
var pickedColor =randomColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDislay = document.getElementById("messageDisplay");
colorDisplay.innerHTML=pickedColor;
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function()
    {
        var clickedColor= this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            messageDislay.innerHTML="Correct";  
            changColor(clickedColor)
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDislay.innerHTML="Try again";
        }
    });

    function changColor(color)
    {
        for(var i=0;i<squares.length;i++)
        squares[i].style.backgroundColor=color;
    }
}

function randomColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}