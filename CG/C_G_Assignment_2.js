<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Canvas My</title>

    <style>
        canvas {
            border: 1px solid black;
            /* background: blueviolet; */
        }
        
        body {
            margin: 0;
        }
    </style>
</head>

<body>
   
    <canvas id="myCanvas" height="800" width="800"> 
        
    </canvas>

    
    <script src="AssignmentTwo.js">
    
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      var colorArray = [
        '#2C3E50',
        '#E74C3C',
        '#ECF0F1',
        '#3498DB',
        '#2980B9',
    ]

 
 //middle point 440 and 355
 ctx.moveTo(440, 355);
  
 ctx.lineTo(440, 180);
 ctx.lineTo(480, 290);

 ctx.fillStyle= colorArray[Math.floor(Math.random() * colorArray.length)];
ctx.fill();


ctx.moveTo(440, 355);
  
 ctx.lineTo(580, 298);
 ctx.lineTo(510, 360);
 ctx.fillStyle= colorArray[Math.floor(Math.random() * colorArray.length)];

ctx.fill();


ctx.moveTo(440, 355);
  
 ctx.lineTo(562, 480);
 ctx.lineTo(440, 410);

 ctx.fillStyle= colorArray[Math.floor(Math.random() * colorArray.length)];
ctx.fill();


ctx.moveTo(440, 355);
  
 ctx.lineTo(338, 480);
 ctx.lineTo(380, 360);

 ctx.fillStyle= colorArray[Math.floor(Math.random() * colorArray.length)];
ctx.fill();


ctx.moveTo(440, 355);
  
 ctx.lineTo(300, 300);
 ctx.lineTo(400, 290);

 ctx.fillStyle= colorArray[Math.floor(Math.random() * colorArray.length)];
ctx.fill();


    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineWidth=8;
    ctx.lineTo(400, 290);
    ctx.lineTo(440, 180);
    ctx.lineTo(480, 290);
    ctx.lineTo(580, 300);
    ctx.lineTo(510, 360);
    ctx.lineTo(560, 480);
    ctx.lineTo(440, 410);
    ctx.lineTo(340, 480);
    ctx.lineTo(380, 360);

    ctx.strokeStyle=colorArray[Math.floor(Math.random() * colorArray.length)];;
    ctx.closePath();
    ctx.stroke();


 


  }
    </script>
    

</body>

</html>