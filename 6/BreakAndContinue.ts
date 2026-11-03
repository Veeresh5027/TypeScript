// 1. Break -> used to break the loop and exit the loop

    console.log("*********Break*********");
    for(let i = 1; i <= 10; i++){
        if(i == 5){
            break;
        }
        console.log(i);
    }



// 2. Continue -> used to skip the current iteration

    console.log("*********Continue*********");
    for(let i = 1; i <= 10; i++){
        if(i == 5){
            continue;
        }
        console.log(i);
    }
