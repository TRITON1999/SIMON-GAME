const redSound = new Audio("sounds/red.mp3");
const blueSound = new Audio("sounds/blue.mp3");
const greenSound = new Audio("sounds/green.mp3");
const yellowSound = new Audio("sounds/yellow.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
let pattern = [];
let inputs = [];
let level=1;
let StartedFirstTime = false;
const colors=["red","blue","green","yellow"];
let Started=false;
function nextSequence(num){
    $("h1").text("Level "+num);
    var p=colors[Math.floor(Math.random()*4)];
    pressed(p,false);
    pattern.push(p);
    level++;
    console.log(pattern,level)
}
function check(k){
    inputs.push(k);
    if(inputs[inputs.length-1]==pattern[inputs.length-1]){
        if(inputs.length==pattern.length){
            inputs=[];
            setTimeout(function(){nextSequence(level);},500);
            
        }
    }
    else{
        $("h1").text("Bro you lost .. press A to restart");
        $("body").addClass("game-over");
        pattern=[];
        inputs=[];
        level=1;
        Started=false;
        setTimeout(function(){wrongSound.play()},100);
    }
}

function flash(k){
    $("#"+k).addClass("pressed");
    setTimeout(function(){$("#"+k).removeClass("pressed");},100)
}

function pressed(k,callingDestination){
    switch(k){
        case "red": flash(k);
        if(callingDestination){
            check(k);
            redSound.play();}
        break;
        case "yellow": flash(k);
        if(callingDestination){
            check(k);
            yellowSound.play();}
        break;
        case "green": flash(k);
        if(callingDestination){
            check(k);
            greenSound.play();}
        break;
        case "blue": flash(k);
        if(callingDestination){
            check(k);
            blueSound.play();}
        break;
    }
}

$("h1").click(function(){
    if(!Started){
        Started=true;
        nextSequence(level); 
        $("body").removeClass("game-over");
        console.log("fuy");
    }
})

$(".btn").click(function(e){
    if(Started){
        pressed(e.target.id,true);
        console.log(inputs);
    }
})
$(document).keydown(function(e){
var p=e.originalEvent.key;
if((p==="A"||p==="a")&&(!Started)){
    Started=true;
    nextSequence(level); 
    $("body").removeClass("game-over");
    console.log("fuy");
}
})

alert("RULES \n1) Press the A to start the game. Simon will give the first signal. Repeat the signal by pressing the same color.\n2) Simon will give you another signal and you will sped in next level. Repeat these two signals by pressing the same color lenses, in order.\n3) As you progress in the game Simon will increase the difficulty by adding signal.\nIMPORTANT : IF YOU ARE ON PHONE CLICK ON HEADING TO START OR RESTART THE GAME")
