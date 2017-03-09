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
      shape.drawStarTool();
      shape.drawTriangleTool();
      shape.drawCircleTool();
      shape.drawRectangleTool();
      controls.drawLineTool();
      controls.drawPenTool();
    }

    function toolActions(){
      controls.loadImg();
      controls.clearCanvas();
      controls.colorPickerTool();
    }
};
