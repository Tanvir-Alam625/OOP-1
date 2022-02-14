const myArray = ['my','name','tanvir', 'alam'];
function getArrayElement(array){
    if(Array.isArray(array) == false){
        return 'please input valid array!';
    }
    let number = [0];
    for(const arry of array){
        if(arry.length > number.length){
            number = arry;
        }
    }
    return number;
} 
const myOutput = getArrayElement('myArray');
console.log(myOutput);