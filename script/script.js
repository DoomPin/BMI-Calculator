"use strict"

const ageInput    = document.querySelector(".age")
const heightInput = document.querySelector(".height")
const weightInput = document.querySelector(".weight")
const calcButton  = document.querySelector(".btn")
const result = document.querySelector(".result")
const statement = document.querySelector(".result-statement")
let BMI , height , age , weight;

calcButton.addEventListener("click" , () => {
    age    = ageInput.value;
    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / ((height*height)/10000)).toFixed(2);
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});
