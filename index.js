var i;
for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].
addEventListener
("click",
function ()
{
    var buttonSelect= this.innerHTML;  
    sound(buttonSelect);
    button(buttonSelect);
    
}
);
}
// for keyboard press.event.key will return only the vale of the letter pressed.
document.addEventListener("keydown",function(event)
{
    sound(event.key);
    button(event.key);
});

function sound(value)
{
    switch(value)
    {
        case "w":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1= new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
             var tom1= new Audio("./sounds/tom-3.mp3");
            tom1.play();
             break;
        case "d":
            var tom1= new Audio("./sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1= new Audio("./sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1= new Audio("./sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1= new Audio("./sounds/crash.mp3");
            tom1.play();
            break;
        

    } 
}
function button(currentKey)
{
    var activeButton= document.querySelector("."+currentKey);
    // .w .t-> classes that are used in HTML. 
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");

    }, 100);
}
