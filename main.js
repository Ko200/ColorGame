var colors = generateRandomColors(6);
var colorsEasy = generateRandomColors(3);
var colorsHard = generateRandomColors(9);
var squares = document.querySelectorAll(".square");
var squaresEasy = document.querySelectorAll(".squaresEasy");
var squaresHard = document.querySelectorAll(".squaresHard");
var pickedColor =randomColor();
var pickedColorEasy =randomColorEasy();
var pickedColorHard =randomColorHard();
var colorDisplay= document.getElementById("colorDisplay");
var messageDislay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var newGame = document.getElementById("newgame");
colorDisplay.innerHTML=pickedColor;
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function()
    {  
        var clickedColor= this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {  
            messageDislay.innerHTML="Correct!"; 
            newGame.textContent="Play Again ?"; 
            changColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
           

            
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
for(var i=0;i<squaresEasy.length;i++)
{
    squaresEasy[i].style.backgroundColor=colorsEasy[i];
    squaresEasy[i].addEventListener("click",function()
    {
        var clickedColor= this.style.backgroundColor;
        if(clickedColor === pickedColorEasy)
        {
            messageDislay.innerHTML="Correct!";  
            changColorEasy(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDislay.innerHTML="Try again";
        }
    });

    function changColorEasy(color)
    { 
        for(var i=0;i<squaresEasy.length;i++)
        squaresEasy[i].style.backgroundColor=color;
        
        
    }
}

for(var i=0;i<squaresHard.length;i++)
{
    squaresHard[i].style.backgroundColor=colorsHard[i];
    squaresHard[i].addEventListener("click",function()
    {
        var clickedColor= this.style.backgroundColor;
        if(clickedColor === pickedColorHard)
        {
            messageDislay.innerHTML="Correct!";  
            changColorHard(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDislay.innerHTML="Try again";
        }
    });

    function changColorHard(color)
    { 
        for(var i=0;i<squaresHard.length;i++)
        squaresHard[i].style.backgroundColor=color;
        
        
    }
}
//function to  get random color in index
function randomColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}
function randomColorEasy()
{
    var random = Math.floor(Math.random() * colorsEasy.length);
    return colorsEasy[random];  
}
function randomColorHard()
{
    var random = Math.floor(Math.random() * colorsHard.length);
    return colorsHard[random];  
}

function generateRandomColors(num)
{
    var array =[];
    for(var i =0;i<num;i++)
    {
        array[i] = randomArray();
    }
    return array;
}
// function to create random color in array
function randomArray()
{
    //select red
    var red = Math.floor(Math.random() * 256);
    //select green
    var green = Math.floor(Math.random() * 256);
    //select blue
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}