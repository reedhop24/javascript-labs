'use strict';

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for(var i = 0; i < len; i++){
      if(inputArr[i] > inputArr[i + 1]){
        let temp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  while (swapped);
  return inputArr;
};

// eslint-disable-next-line no-undef
module.exports = bubbleSort;

