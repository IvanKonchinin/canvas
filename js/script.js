const canvas = document.getElementById('canvas'),
      color = document.getElementById('color'),
      range = document.getElementById('range'),
      outHeightPaint = document.querySelector('.out-height-paint'),
      context = canvas.getContext('2d'),
      radius = 50;


color.addEventListener('input', () => {
  context.strokeStyle = color.value;
});

range.addEventListener('change', () => {
  outHeightPaint.textContent = range.value;
  context.lineWidth = range.value;
});

canvas.addEventListener('mousemove', (event) => {
  const x = event.offsetX,
        y = event.offsetY,
        mx = event.movementX,
        my = event.movementY;

        if(event.buttons > 0){
       
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - mx, y - my);
        context.stroke();
        context.closePath();

        }
});

const circles = [
  { color:'#0884C1', x:2*radius - radius/2, y:2*radius, q: [1,2,3,0]},
  { color:'#000000', x:4*radius,            y:2*radius, q: [2,0,1,3]},
  { color:'#EC324D', x:6*radius + radius/2, y:2*radius, q: [2,0,1,3]},
  { color:'#FAB131', x:3*radius - radius/4, y:3*radius, q: [3,0,1,2]},
  { color:'#1B8A3B', x:5*radius + radius/4, y:3*radius, q: [3,0,1,2]}
];

function drawArc(context, circle, q) {
  let s = (circle.q[q] + 0.5) / 2 * Math.PI,
    e = (circle.q[q] - 0.5) / 2 * Math.PI;


  context.lineWidth = 10;
  context.strokeStyle = circle.color;
  context.beginPath();
  context.arc(circle.x, circle.y, radius, s, e, true);
  context.stroke();



  context.lineWidth = 10;
  context.strokeStyle = circle.color;
  context.beginPath();
  context.arc(circle.x, circle.y, radius, s, e, true);
  context.stroke();
}



for (let q = 0; q < 4; ++q) {
  circles.forEach(function (circle) {
    drawArc(context, circle, q);
  })
}

context.strokeStyle = '#000000';      

// const angle = (degrees) => {
//   return radians = (Math.PI / 180) * degrees;
// };

// const gradient = context.createLinearGradient(20, 20, 120, 120);//линейный градиент - x,y,width.height
// const gradient = context.createRadialGradient(70, 70, 0, 70, 70, 70);//круглый градиент - x,y,rad,x2,y2,rad2

// gradient.addColorStop(0, 'hsl(250, 70%, 70%)');
// gradient.addColorStop(1, 'hsl(0, 70%, 70%)');

// context.fillStyle = gradient;
// context.fillRect(20, 20, 100, 100);

// context.strokeStyle = 'rgb(50, 155, 50)';
// context.strokeRect(10, 10, 120, 120);
// context.clearRect(10, 10, 120, 120);//прозрачный квадрат

// let tick = 0;
// const animation = () => {
//   context.clearRect(0, 0, canvas.clientWidth, canvas.height);
//   context.fillStyle = 'green';
//   context.fillRect(tick,tick,50,50);
//   tick++;
//   if(tick < 350){
//     requestAnimationFrame(animation);
//   } else {
//     reverse();
//   }
// };

// const reverse = () => {
//     context.clearRect(0, 0, canvas.clientWidth, canvas.height);
//     context.fillStyle = 'green';
//     context.fillRect(tick, tick, 50, 50);
//     tick--;
//     if (tick > 0) {
//       requestAnimationFrame(reverse);
//     } else {
//       animation();
//     }
// };

// animation();
//  context.beginPath();//линии
// context.moveTo(175, 125);
// context.lineTo(300, 150);
// context.lineTo(175, 175);
// context.moveTo(125, 175);
// context.lineTo(0, 150);
// context.lineTo(125, 125);
// // context.lineTo(50, 135);
// // context.lineTo(100, 85);
// // context.lineTo(15, 50);
// // context.lineTo(100, 50);
// // context.lineTo(150, 0);

// context.arc(150, 150, 25, 0, angle(360), false);//дуги
// context.moveTo(175, 150);
// context.moveTo(125, 125);
// context.arcTo(150, 100, 175, 125, 30);
// context.lineTo(175, 125);
//  context.lineWidth = '2';
//  context.strokeStyle = '#008800';

// context.moveTo(100, 100);
// context.bezierCurveTo(200, 0, 200, 200, 300, 100);
//  context.stroke();
// context.shadowOffsetX = 5;
// context.shadowOffsetY = 5;
// context.shadowBlur = 3;
// context.shadowColor = 'red';
// context.font = '30px Sans-serif';
// context.fillStyle = 'green';
// context.save();
// context.fillText('Javascript', 50, 50, 200);

// context.shadowColor = 'orange';
// context.fillStyle = 'blue';
// context.rotate(angle(10));

// context.fillText('GloAcademy', 200, 50, 200);
// context.restore();
// context.fillText('Freelance', 125, 150, 200);

