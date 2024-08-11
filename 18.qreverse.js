
// q2:  

// print each workd in reverse


let str = "Ram is dancing on the floor"
let newStr = ""

str = str + " "

let word = ""

for(let t of str){

    if(t != " "){
        word =   t+word //  maR 
    }

    else if(t == " " ){
        // console.log(word)
        // let reverseWord = "" 
        // for(let i = word.length-1; i>=0; i--){
        //     reverseWord = reverseWord + word[i]
        // }
        // console.log(reverseWord)
        newStr = newStr + word + " "
        word = ""
    }


}
console.log(newStr) // maR si gnicsnad no eht roof