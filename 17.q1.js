
// q1: any number s of spaces cpould be between the words and at starta nd end of the string
// let str = "    Ram     is   dancing   on   the  floor  "


let str = "    Ram   is   dancing   on   the  floor  "

str = str + " "

let word = ""

for(let t of str){

    if(t != " "){
        word = word + t // "Ram"
    }

    else if(t == " " && word != ""){
        console.log(word)
        word = ""
    }


}