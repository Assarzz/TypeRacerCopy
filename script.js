
let writtenChars = 0;
let text = "factories make the cloth that makes our poverty. All those who wish to make the English see bring me the cloth from Manchester and Leeds that you wear today and we will light a fire that will be seen in Delhi, and in London!";

const allowedChars = new Map();
allowedChars.set("a", 1);
allowedChars.set("b", 1);
allowedChars.set("c", 1);
allowedChars.set("d", 1);
allowedChars.set("e", 1);
allowedChars.set("f", 1);
allowedChars.set("g", 1);
allowedChars.set("h", 1);
allowedChars.set("i", 1);
allowedChars.set("j", 1);
allowedChars.set("k", 1);
allowedChars.set("l", 1);
allowedChars.set("m", 1);
allowedChars.set("n", 1);
allowedChars.set("o", 1);
allowedChars.set("p", 1);
allowedChars.set("q", 1);
allowedChars.set("r", 1);
allowedChars.set("s", 1);
allowedChars.set("t", 1);
allowedChars.set("u", 1);
allowedChars.set("v", 1);
allowedChars.set("w", 1);
allowedChars.set("x", 1);
allowedChars.set("y", 1);
allowedChars.set("z", 1);
allowedChars.set(" ", 1);
allowedChars.set(".", 1);
allowedChars.set(",", 1);
allowedChars.set("-", 1);


function lighttext(e){

    
    const theKey = e.key+"";
    console.log(theKey);
    if (theKey == "Backspace" && writtenChars > 0){

        let answer = document.getElementById("TextToWrite").children[writtenChars-1];
        answer.style.backgroundColor = "white";
        answer.style.color = "black";
        writtenChars --;
    }
    else if (e.key == "Shift"){

    }

    else if (allowedChars.get(theKey.toLowerCase()) == 1){
    

        const typed = e.key;
        const answer = document.getElementById("TextToWrite").children[writtenChars];

        if (typed == answer.innerHTML){
            answer.style.backgroundColor = "green";

            answer.style.color = "white";
        }
        else{
            answer.style.backgroundColor = "red";
            answer.style.color = "white";

        }
    
        writtenChars ++;

    }


}

window.onload = function(){


    for (const index in text) {

        var toadd = document.createElement("SPAN");
        toadd.innerHTML = text[index];
        document.getElementById("TextToWrite").appendChild(toadd);

    }

    //set allowed 
}