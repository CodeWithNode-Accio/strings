
// let str = "amResRhr"

// str[0] = "P" // "R" => P

// str = "Pankaj"

// console.log(str) // Ramesh

// replace()

// let s1 = str.replace("R","P")
// console.log(s1) // Pamesh

// console.log(str) 

// replace, replaceAll, 

// console.log(str.replace("R", "P"))
// 
// console.log(str.replaceAll("R", "P"))


let str = "koppa"

let newStr = "" // kozza

for(let t of str){
    //  console.log(t)
    if(t == "p"){
        newStr = newStr + "z"
    }
    else{
        newStr = newStr + t
    }
    
}

console.log(newStr)