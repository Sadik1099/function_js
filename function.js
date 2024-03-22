// const number = 45;

// function square(numbers){
//     console.log('value of the number parameter: ',numbers);
//     const bongo = numbers * numbers;
//     console.log('square of the numbeer is: ', bongo);
// }

// square(5);
// console.log('------------');
// square(45);

// //  add function ------------

// function addAll(a,b,c,d,e){
//     const sum = a+b+c+d+e;
//     console.log('Total: ',sum);
// }

// addAll(1,3,4,5,6);


// return type----------------

// function tenTimes (number){
//     const result = number*10;
//     return result;
// }

// //tenTimes(5);

// const result = tenTimes(6);
// console.log('Result: ',result);

// -----------conditional REturn type-------------//

// function isEven(number){
//     if(number % 2 == 0) return true;
//     else return false;
// }

// console.log(isEven(5));
// console.log(isEven(12));



// -------- Different type Parameters ------------------//

// String  //

function stirngst(str){
    const size = str.length;
    console.log(str,size);
    if(size%2==0){
         console.log('Even Number');
    }
    else{
        console.log('Odd Number');
    }
}

stirngst('fsfsfd');
stirngst('Dhakaaaaaa');

function doubleTroblr(number, doDuble){
    if(doDuble){
        const result = number*2;
        return result;
        }
        else{
            const result = number *3;
            return result;
        }
}

const result = doubleTroblr(5,true);

console.log(result);