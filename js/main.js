var checkWords = false;

function Morse(){
    var strOriginal = document.getElementsByTagName("h2")
    [0].innerHTML;
    console.log(strOriginal);
    document.getElementsByTagName("h2")[0].style.color = "#DBDBDB";
    document.getElementsByTagName("h2")[0].style.textDecoration = "line-through";

    var strReplace = strOriginal.replace("Hey Guys, I am going to do a video series called top 10 reasons that why Dota2 sucks, because this game is just fucking dogshit.", ".... . -.-- / --. ..- -.-- ... --..-- / .. / .- -- / --. --- .. -. --. / - --- / -.. --- / .- / ...- .. -.. . --- / ... . .-. .. . ... / -.-. .- .-.. .-.. . -.. / - --- .--. / .---- ----- / .-. . .- ... --- -. ... / - .... .- - / .-- .... -.-- / -.. --- - .- ..--- / ... ..- -.-. -.- ... --..-- / -... . -.-. .- ..- ... . / - .... .. ... / --. .- -- . / .. ... / .--- ..- ... - / ..-. ..- -.-. -.- .. -. --. / -.. --- --. ... .... .. - .-.-.-");
    console.log(strReplace);
    
    document.getElementsByTagName("h2")[3].innerHTML = strReplace;
    
    
    var audio = document.getElementsByTagName("audio")[0];
    console.log(audio);
    audio.play(); 
    checkWords = true;
}


function Filter(){
    var strOriginal = document.getElementsByTagName("h2")[1].innerHTML;
    console.log(strOriginal);
    document.getElementsByTagName("h2")[1].style.color = "#DBDBDB";
    document.getElementsByTagName("h2")[1].style.textDecoration = "line-through";
    var strReplace = strOriginal.replace("The topic of this video is the dogshit fucking community, Okay, because if you are fucking retarded, Okay, if you are a fucking retard, you don't realize this. The community is completely segregated and a bunch of little dog shit sub communities.", "The topic of this video is the amazing community, Okay, because if you are a good player, Okay, if you are a pro player, you will realize this. The community is completely unified and a bunch of good people in those wonderful communities.");
    document.getElementsByTagName("h2")[4].innerHTML = strReplace;
    
    var audio = document.getElementsByTagName("audio")[1];
    audio.play(); 
    checkWords = true;
}

function Censor(){
    var strOriginal = document.getElementsByTagName("h2")[2].innerHTML;
    console.log(strOriginal);
    document.getElementsByTagName("h2")[2].style.color = "#DBDBDB";
    document.getElementsByTagName("h2")[2].style.textDecoration = "line-through";
    var strReplace = strOriginal.replace("For number two is gonna be the dogshit fucking casters in this fucking game ok. All the shitstein motherfucker you hear talking over on stream or shit and inside the DotaTV you are watching a pro game. I am going to expose this these dogshit,  fucking steaming pile of shit fucking casters. Honestly, I don't even fucking know why these fucking shitstein motherfuckers are paid to talk over these fucking games.", "csbct rjihj tckqi twwla ruhps pjfcn tbzbl ujakj dlxxa sfczy ybqjo ziuqn sdbun nxffv jdebr hthta xfdkh rkejv mmbim dxzen hljrp xjhrz ncehh gbzjp cawua okzbq fvjzi jmlxj zrxwh icshg skoct gggcx oylqz vembh uhtjm brvra guyey xocqv ryusn rsqwv tmghz ztiwl oafgz xrpma ouzbe wduxp fmxtz wdwma xbhqi bgpid gxmij phtjx gmqlv gvllz wfmdw rvqwv ufvyv uaysv qcovx qnwmg cgbnj jmztn hjtuc imvqa swmom pffrr bp");
    document.getElementsByTagName("h2")[5].innerHTML = strReplace;
    
    var audio = document.getElementsByTagName("audio")[2];
    audio.play() 
    checkWords = true;
    
}

function decryptMorse(){
    if(checkWords == true){
        window.alert("FBI Warning: The Decrypted Messages might be inappropriated for certain users. Please don't distrubute this message in classroom");
        var audio = document.getElementsByTagName("audio")[3];
        audio.play();
    } else{
        window.alert("You didn't receive any messages yet");
    }
    
}

function decryptFilter(){
    if(checkWords == true){
        window.alert("FBI Warning: The Decrypted Messages might be inappropriated for certain users. Please don't distrubute this message in classroom");
        var audio = document.getElementsByTagName("audio")[4];
        audio.play();
    } else{
        window.alert("You didn't receive any messages yet");
    }
    
}

function decryptCensor(){
    if(checkWords == true){
        window.alert("FBI Warning: The Decrypted Messages might be inappropriated for certain users. Please don't distrubute this message in classroom");
        var audio = document.getElementsByTagName("audio")[5];
        audio.play();
    } else{
        window.alert("You didn't receive any messages yet");
    }  
}

function openNav() {
  document.getElementById("myNav").style.width = "90%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}