canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

ctx.beginpath();
ctx.strokestyle = "grey";
ctx.lineWidth=4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = "blue";
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = "black";
ctx.lineWidth=5;
ctx.arc(350,50,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = "red";
ctx.lineWidth=5;
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = "yellow";
ctx.lineWidth=5;
ctx.arc(300,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = "green";
ctx.lineWidth=5;
ctx.arc(400,250,40,0,2 * Math.PI);
ctx.stroke();