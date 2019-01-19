var myArray = [1,100,2002,3,341,4,55,6]

function findMax(myArray) {
        aLength = myArray.length;
    for(var i = 0; i < aLength - 1; i++){

        var maxNumber;
        var currentNumber = myArray[i];
        var nextNumber = myArray[i + 1];
        if(maxNumber > currentNumber){
             maxNumber = maxNumber
}
        
        else if(currentNumber > nextNumber){
             maxNumber = currentNumber;

        } else if (nextNumber > currentNumber){
             maxNumber = nextNumber;
        }
            
    } return maxNumber;
} 