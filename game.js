const car = document.getElementById('car'); // id img of car

const ball = document.getElementById('ball');

const btn = document.getElementById("btn");

const Reset = document.getElementById("Reset")

const audio = document.getElementById("audio");


let valRange = 0;
let i = 0;
let temps = 10;
let speed = 5;
var id;


audio.pause();


btn.onclick = function(){

  audio.currentTime = 40;
   audio.play();

    id =  setInterval(() => {
      valRange += speed;
      
      // car
      if(valRange < 450)
      car.style.right = valRange + "px"
      
      // ball
      if(valRange >= 452){
        audio.pause()
        // temps = 5;
        i+= 2;
        
        ball.style.right = valRange + 50 +  i + "px";
      // remove setIterval time
        if(i > 800)
           clearInterval(id);
      }
     

    }, temps);
  
}


Reset.onclick = function () {
    clearInterval(id)
    valRange = 0;
    car.style.right  = 0;
    i = 0;
    ball.style.right = 500 + "px"
    
}



  








