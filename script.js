

document.getElementById("button_calculate").addEventListener("click",calculate);

function calculate() {
    let topa = document.getElementById("top").value;
    let buttonb = document.getElementById("button").value;
    let heighth = document.getElementById("height").value;



    let output = (heighth * (topa + buttonb))*(1/2);

    console.clear();
    console.log("top = " + topa);
    console.log("button = " + buttonb);
    console.log("height = " + heighth);
    
    document.getElementById("answeroutput").innerHTML =  output;

}



