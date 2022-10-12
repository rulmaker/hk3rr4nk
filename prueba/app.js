const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let base = arr.length;
    let a = 0, b = 0, c = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){a++;}
        if(arr[i] > 0){b++;}
        if(arr[i] < 0){c++;} 
    }
    let r1 = (1/base) * a;
    let r2 = (1/base) * b;
    let r3 = (1/base) * c;
    console.log(`${r1.toFixed(6)}\n${r2.toFixed(6)}\n${r3.toFixed(6)}`)
}

plusMinus(arr)

console.log("hello");