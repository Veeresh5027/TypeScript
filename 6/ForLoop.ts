//3. For Loop executes the statement for a fixed number of times
//syntax
// for(initialization; condition; increment/decrement){
//     statement
// }

    // for(let i = 1; i <= 10; i+=2){
    //     console.log(i);
    // }

//print even numbers
    // for(let i = 1; i <= 10; i++){
    //     if(i % 2 == 0){
    //         console.log(i);
    //     }
    // }

//print odd numbers
    // for(let i = 1; i <= 10; i++){
    //     if(i % 2 != 0){
    //         console.log(i);
    //     }
    // }

//print numbers in reverse order
    // for(let i = 10; i >= 1; i--){
    //     console.log(i);
    // }

// 4. For-Each Loop
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    for(let num of numbers){
        if(num%2 == 0){
            console.log(num);
        }
    }