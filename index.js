// Objects: Part 2

// 1. Check if a number is within a given range


function range(input, obj) {
    
    if (input >= obj.min && input <= obj.max) {
        console.log(obj);
        console.log(true);
    } else {
        console.log(obj);
        console.log(false);
    }
};

range(1, {min: 3, max: 5});


let obj = {
    min: 4,
    max: 11
}

let objTest = {
    min: "",
    max: [],
    something: {}
}


// 2. Scrabble


