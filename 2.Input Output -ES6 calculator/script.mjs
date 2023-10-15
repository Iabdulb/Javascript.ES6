console.log("ES6 Calculator")

function doSum (event) {

    event.preventDefault();
    let firstNumber = document.querySelector("#firstnumber").value;
    let secondNumber = document.querySelector("#secondnumber").value; 

    console.log(firstNumber);
    console.log(secondNumber); 

    let result = Number(firstNumber) + Number(secondNumber);

     let message = `the sum of ${firstNumber} and ${secondNumber} is ${result}`

     
     document.querySelector("#resultWindow").innerHTML = message
}