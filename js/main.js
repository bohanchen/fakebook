function Morse(){
    var strOriginal = document.getElementsByTagName("h2")[0].innerHTML;
    console.log(strOriginal);
    var strReplace = strOriginal.replace("I hate you, I don't like you!", ".. / .... .- - . / -.-- --- ..- --··-- / .. /  -.. --- -. ·----· - / .-.. .. -.- . / -.-- --- ..- -·-·--");
    document.getElementsByTagName("h2")[0].innerHTML = strReplace;
    
    var audio = document.getElementById("audio");
    audio.play()  
}


function Filter(){
    var strOriginal = document.getElementsByTagName("h2")[1].innerHTML;
    console.log(strOriginal);
    var strReplace = strOriginal.replace("I hate you, I don't like you!", "I love you, I wanna hug you");
    document.getElementsByTagName("h2")[1].innerHTML = strReplace;
    
    var audio = document.getElementById("audio2");
    audio.play() 
}

function Censor(){
    var strOriginal = document.getElementsByTagName("h2")[2].innerHTML;
    console.log(strOriginal);
    var strReplace = strOriginal.replace("I hate you, I wanna kill you!", "I **** you, I ***** **** you");
    document.getElementsByTagName("h2")[2].innerHTML = strReplace;
    
    var audio = document.getElementById("audio3");
    audio.play() 
}
