var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor =randomColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDislay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
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

//function to  get random color in index
function randomColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
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