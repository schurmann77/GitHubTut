var myArray = [1,200,3,400]

function findMax(myArray) {
     var maxNumber = myArray[0];

     for(i = 0;i < myArray.length;i++) {
          var currentNumber = myArray[i];
          if (currentNumber > maxNumber) {
               maxNumber = currentNumber;
          } else {
               maxNumber = maxNumber;
          }
     } return maxNumber;
}