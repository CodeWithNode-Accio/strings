// q1:

// Take a string , print its last 4 charcaters

// let str = "abhishek"

// // l - 4, l-1 


// let l = str.length

// for(let i =l-4; i<=l-1; i++ ){
//     console.log(str[i])
// }







// q2: Take a string and print only those charcaters which are vowels 


let str = "AbhioO"

for(let t of str){
    // console.log(t)
    if( t == "a" || t == "A" ||
        t == "e" || t == "E" ||
        t == "i" || t == "I" ||
        t == "o" || t == "O" ||
        t == "u" || t == "U"
    ){
        console.log(t)
    }
}



// q3: Take a string and reverse it 
// Ram => maR

// let str = "abhi" // ihba 
// let reverseWord = ""
// for(i = str.length-1; i>=0; i--){
//     //   console.log(str[i])
//     reverseWord = reverseWord + str[i]
        // ihba
//     // r = r + i => "i"
//     //r = r+ str[i] => ih
//     //r = r+ str[i] => ihb
//     //r = r+ str[i] => ihba
// }
// console.log(reverseWord)


// 5+6 = 6+5

// "a"+"b" = "ab"
// "b"+"a" = "ba"



// let str = "abhi" // ihba 
// let reverseWord = ""
// for(i = 0; i<=str.length-1; i++){
    
    // console.log(i,"=>",str[i])

//     // reverseWord =  reverseWord+str[i]
//     reverseWord = str[i]+reverseWord
//     // reverseWord = str[i]+reverseWord = a+"" = a
//     // reverseWord = str[i]+reverseWord = b+a = ba
//     // reverseWord = str[i]+reverseWord = h+ba = hba
//     // reverseWord = str[i]+reverseWord = i+hba = ihba
    
// }
// console.log(reverseWord)
