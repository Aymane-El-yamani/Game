let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

    let id = undefined;

window.onscroll = function(){

    let value =scrollY;

  if(value < 500){
    img2.style.right = value + 'px';
    clearInterval(id);
   
        
  }
  else{
  let val = value
   id = setInterval(function () {
    val-=2;
        img1.style.left = val + 'px' ;
    
    },5 )


    
  }
    
}









