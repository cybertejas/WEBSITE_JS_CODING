// A
// A B
// A B C
// A B C D
// A B C D E

/*
let patterns = ""
for(let x = 0; x<5; x++){
    for(let y = 0; y>=x; y++){
        patterns += String.fromCharCode(65 + y);
    }
    patterns += "\n"
}

console.log(patterns)
*/



// A B C D E
// A B C D
// A B C
// A B
// A

/*
let patterns = ""
for(let x = 5; x>=0; x--){
    for(let y = 0; y<=x; y++){
        patterns += String.fromCharCode(65 + y);
    }
    patterns += "\n"
}

console.log(patterns);
*/

// A
// B C
// D E F
// G H I J
// K L M N O

/*
let pattern = "";
let y = 0;
for (let x=0;x<5;x++){
    for (let i=0;i<=x;i++){
        pattern += `${String.fromCharCode(65 + y)} `;
        y += 1;
    }
    pattern += "\n";
}
console.log(pattern);
*/

/*
patterns = ""
for(let x = 0; x<5; x++){
    for(let y = 0; y>=x; y++){
        patterns += String.fromCharCode(65 + y);
    }
    patterns += "\n"
}

console.log(patterns)
*/


// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *



