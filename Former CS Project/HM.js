//window.onload(drawFunction())
//window.onload(HM_logic())

function HM_logic() {
    var real_answer_key = "why"
    var answer_key = document.getElementById("answer").innerHTML
    var user_input = document.getElementById("user_input")
    user_input = user_input.value
    answer_key = answer_key.replace(/\s+/g, '');
    answer_key = answer_key.replace('|', '');

    while (real_answer_key.includes(user_input)) {
        var input_index = real_answer_key.indexOf(user_input)
        

        
        console.log(answer_key)        
        console.log(real_answer_key)

    }
    
}




function drawFunction() {

    //Draw Base
    drawLine(100, 475, 475, 475)
    drawLine(510, 475, 525, 475)
    drawLine(525, 475, 525, 575)
    drawLine(525, 575, 100, 575)
    drawLine(100, 575, 100, 475)


    //Draw rest
    drawLine(510, 475, 510, 40)
    drawLine(475, 475, 475, 75)
    drawLine(475, 125, 425, 75)
    drawLine(475, 150, 400, 75)
    drawLine(475, 75, 275, 75)
    drawLine(510, 40, 235, 40)
    drawLine(235, 40, 235, 150)
    drawLine(275, 75, 275, 150)
    drawLine(235, 150, 275, 150)
    drawLine(255, 150, 255, 200)



}


function drawLine(x1, y1, x2, y2, color) {
    var canvas = document.getElementById('Canvas').getContext("2d");
    canvas.beginPath();
    canvas.moveTo(x1, y1);
    canvas.lineTo(x2, y2);

    canvas.strokeStyle = color;
    canvas.stroke();
}

function drawRect(x, y, width, height, color, filled, transparency) {
    var canvas = document.getElementById('Canvas').getContext("2d");
    canvas.beginPath();
    canvas.rect(x, y, width, height)
    if (filled) { // if filled is true 
        canvas.globalAlpha = transparency;
        canvas.fillStyle = color;
        canvas.fill();
    } 
    else { // if filled is false
        canvas.strokeStyle = color;
        canvas.stroke();
    }

}