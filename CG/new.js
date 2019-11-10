var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#038C8C',
    '#3498DB',
    '#2980B9',
]

//For all rectangle height and width
dx=20;
dy=20;

//left bar
x=Math.random() + 10;
y=Math.random() + 10;



for (var a=0; a<10; a++){
   
    ctx.fillRect(x,y,dx,dy);
    ctx.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    x=11;
    y+=20;

}

//reverse rectangle
b=Math.random() + 30;
c=Math.random() + 30;


for (var a=0; a<7; a++){
   
    ctx.fillRect(b, c,dx,dy);
    ctx.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    b += 15;
    c += 15;

}

//reverse rectangle

d= 210;
e= 30;

for (var j=0; j<7; j++){
   
    ctx.fillRect(d,e,dx,dy);
    ctx.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    d -= 15;
    e += 15;

}

//right bar
f= 230;
g=Math.random() + 10;


for (var h=0; h<10; h++){
   
    ctx.fillRect(f,g,dx,dy);
    ctx.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    
    g += 20;

}







