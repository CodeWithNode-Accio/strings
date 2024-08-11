// q1:
// count all possible 3 letter substring ina given string
// str = "abhishek"
// abh , bhi , his , ish , she , hek

// let str = "abhishek"

// let count = 0
// for(let i = 0; i<=str.length-3; i++){
//        let s1 = str.slice(i, i+3) 
//        if(s1.length == 3){
//          count++
//        }
//        // 0-3 => abh
//        // 1-4 => bhi
//          // 2-5 => his
//         // 3-6 => ish
//         // 4-7 => she
//         // 5-8 => hek
//         // 6-9 => ek
//         // 7 -10 => k
// }
// console.log(count)






// q2: Print all the palindromic substrings in a given string


let str = "bamamab" 

// b, ba, bam, bama, bamam, bamama, bamamab, 
//  a, am, ama,amam, amama, amamab
//   m, ma, mam, mama, mamab
//    a, am, ama, amab 
//     m, ma, mab
//      a, ab
//       b


let count = 0
for(let i = 0; i<=str.length-1; i++){

    // i =0 "b" ,  i = 1 => "a"

    for(j = i+1; j<=str.length; j++){
         let originalStr = str.slice(i,j) // "ramesh"
         let revStr = ""
         for(let k = originalStr.length-1; k>=0; k--){
            revStr = revStr + originalStr[k]
         }
        //  console.log(originalStr, revStr)

        if(originalStr == revStr){
            console.log(originalStr)
            count++
        }

         
    }

}

console.log(count)



// 0-1 => b
         // 0-2 => ba
         // 0-3 => bam
            // 0-4 => bama
            // 0-5 => bamam
            // 0-6 => bamama
            // 0-7 => bamamab

            // 1-2 => a
            // 1-3 => am
            // 1-4 => ama
            // 1-5 => amam
            // 1-6 => amama
            // 1-7 => amamab


