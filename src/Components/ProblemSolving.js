function matchedCharacter(inputedArray, elementToReplace, subtractionEle) {
    inputedArray.forEach((ele, index) => {
        if (ele === elementToReplace) {
            return inputedArray[index] = subtractionEle;
        }
    })
    // console.log(inputedArray)
}

matchedCharacter([1, 2, 1], 1, 3);

function addTwoNumbers(param_1, param_2) {
    const L1 = param_1.reverse().join("");
   const  L2 = param_2.reverse().join("");
     return Number(L1)+Number(L2);
 }
 
console.log( addTwoNumbers([2, 4, 3], [5, 6, 4]))