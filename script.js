

document.getElementById("button_calculate").addEventListener("click",calculate);

function calculate() {
    let topa = document.getElementById("top").value;
    let buttonb = document.getElementById("button").value;
    let heighth = document.getElementById("height").value;



    let output = (topa + buttonb)* heighth *0.5;
    
    document.getElementById("answeroutput").innerHTML = output;

}



