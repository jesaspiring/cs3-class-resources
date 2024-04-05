/**
 * A - 1
 * E - 2
 * I - 3
 * O - 4
 * U - 5
 */

function changeToNumbers(word){
    word = word.toLowerCase(); //Hello -> hello
    for(var i = 0; i < word.length; i++){
        if(word[i] == "a"){
            word = word.replace(word[i], "4");
        }
        else if(word[i] == "e"){
            word = word.replace(word[i], "3");
        }
        else if(word[i] == "i"){
            word = word.replace(word[i], "1");
        }
        else if(word[i] == "o"){
            word = word.replace(word[i], "0");
        }
        else if(word[i] == "u"){
            word = word.replace(word[i], "|_|");
        }
    }

    return word;
}

console.log(changeToNumbers("Good morning, Philippines"));