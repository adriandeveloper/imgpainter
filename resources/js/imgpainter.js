window.onload = function() {
  const $canvas = $('canvas');
  const controls = newControls($canvas);
  const shape = shapes($canvas);

    function resizeCanvas(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStuff();
      toolActions();
    }
    resizeCanvas();

    function drawStuff(){
      // shape.drawShape();
      controls.loadImg();
    }

    function toolActions(){
      controls.clearCanvas();
    }




};
