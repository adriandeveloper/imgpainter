$(function() {
  const $canvas = $('canvas');
  const $drawShape = controls.drawShape();
  // const $contex = ctx.getContext('2d');


    function resizeCanvas(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStuff();
    }
    resizeCanvas();

    function drawStuff(){
      // $drawShape;
      controls.drawShape();
      controls.loadImg();
    }

    // console.log(controls.drawShape());


});
