
let writtenChars = 0;
let text = "factories make the cloth that makes our poverty. All those who wish to make the English see bring me the cloth from Manchester and Leeds that you wear today and we will light a fire that will be seen in Delhi, and in London!";

function lighttext(e){

    console.log(e.key);
    if (e.key == "Backspace" && writtenChars > 0){

        let answer = document.getElementById("TextToWrite").children[writtenChars-1];
        answer.style.backgroundColor = "white";
        answer.style.color = "black";
        writtenChars --;
    }
    else if (e.key == "Shift"){

    }

    else{
    

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
}