var Canvas =  {};
Canvas.tools= ["draw", "paint"];
Canvas.selectedTools = "true"; // in the meanwhile

var canvas = document.getElementById("canvas");
var penColor= "black";
var penSize=5;
var colorPallet = document.getElementById("color");
document.querySelectorAll(".color button").forEach((b) => {
    b.addEventListener("click", (e) => {
        penColor = e.target.id;
    });
});
////need help with this//////////////////
document.getElementById("eraser").addEventListener("click", useEraser);
function useEraser(){
    penColor = "white";
}
colorPallet.addEventListener("change", changeColor);
document.getElementById("number").addEventListener("change", changePenSize);
canvas.addEventListener("click", Canvas.placePaint);
document.getElementById("clear").addEventListener("click", clearButton);


function changeColor(e){
    console.log(colorPallet.value);
	penColor = colorPallet.value;
}
          
function changePenSize(e){
	penSize = parseInt(e.target.value);
}

// Canvas.start=function(){
//     Canvas.bindCanvasClick();
    

// }

// Canvas.bindCanvasClick=function(){
//     var canvas=document.getElementById("canvas");
//   

// }

Canvas.placePaint=function(e){
    // if(Canvas.selectedTools !== ""){
        var dot= document.createElement("div");
        dot.classList.add('dot');
        console.log(dot);
        canvas.appendChild(dot);
        console.log(canvas);
        dot.style.width= penSize +"px";
        dot.style.height= penSize+ "px";
        dot.style.top = e.pageY - canvas.offsetTop + "px";
        dot.style.left = e.pageX - canvas.offsetLeft + "px";
        dot.style.backgroundColor=penColor;
    // }
}


canvas.addEventListener("mousedown", function (e) {
    canvas.onmousemove = function (e) {
        Canvas.placePaint(e);
    }
    canvas.onmouseup=function(e){
        canvas.onmousemove=""; 
    }
});

document.getElementById("canvasWidth").addEventListener("change", changeCanvasWidth);
document.getElementById("canvasHeight").addEventListener("change", changeCanvasHeight);

function changeCanvasWidth(e){
  canvas.style.width= e.target.value +"px";
}
function changeCanvasHeight(e){
  canvas.style.height= e.target.value +"px";
}


function clearButton (){
    canvas.innerHTML="";
}



    





