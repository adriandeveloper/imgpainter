window.onload = function() {
  const $canvas = $('canvas');
  var controls = newControls($canvas);

    function resizeCanvas(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStuff();
    }
    resizeCanvas();

    function drawStuff(){
      controls.drawShape();
      controls.loadImg();
    }




};
