let bread1 = prompt("Which bread? : ");
let veggie1 = prompt("Which veggie? : ");
let sauce1 = prompt("Which sauce? : ");

function makeSandwich(bread, veggie, sauce){
    let sandwich = bread + " bread " + veggie +" "+sauce +" sandwich is ready";
    return sandwich; 
}

let sandwich = makeSandwich(bread1, veggie1, sauce1);
console.log(sandwich);