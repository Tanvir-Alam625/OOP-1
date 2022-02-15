function ourNames(firstName, lastName){
    console.log(arguments);
    let myResult = 0;
    for (const name of arguments){
        myResult = myResult + name;
    }
    return myResult;
}
const name = ourNames(12,12,25,35,358,3)
console.log(name);
