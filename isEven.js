// even or odd 

function isEven (number){
    const reminder = number%2;
    if (reminder === 0){
        return true;
    }
    else {
        return false;
    }
}

const myNamberIsEven = isEven(303)
console.log(myNamberIsEven)
const herNumberIsEven = isEven(1080)
console.log(herNumberIsEven)