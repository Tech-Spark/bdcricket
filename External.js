  /*************||=slider||*************/
var count = 1;
      var total = 6;
       
      function slider(x) {
    
    var image = document.getElementById('img');
         count = count+x;
      if(count<1){

          count = total;
      }
      else if(count>total){
        count = 1;
      }

    image.src = "images/slide"+ count +".jpg";
 
  }


  window.setInterval(function sliderA(x) {
    
    var image = document.getElementById('img');
         count = count+1;
      if(count<1){

          count = total;
      }
      else if(count>total){
        count = 1;
      }

    image.src = "images/slide"+ count +".jpg";
 
  },5000);


    /*************||=||*************/


