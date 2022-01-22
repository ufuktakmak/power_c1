let number1=11;
let number2=200;

function alertFunction(){
    if(number1>number2){
        alert(number1+ " is greater than " + number2)
    }
    else if(number1==100){
        alert(number1+ " is 1000")
    }
    else {
        alert(number2+ " is greater than " + number1)

}
}

function clickOnToSee(){
    let html=document.getElementById('togle');
    html.innerHTML= "At Ufuk"
}



/* Create a function which calculates the area of a circle. 
The function should take 1 parameter, the radius in meters, and return the area square meters. 
Console.log the output for 2 different radiuses */

var area= calculateAreaOfCircle(5);


function calculateAreaOfCircle(radius){
    return radius * 3,1; 
}
console.log(area);