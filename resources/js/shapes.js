const shapes = function(canvas){
  let ismousedown = false;
  let pos = { x:0, y:0 };
  let lastPos = { x:0, y:0 };
  let canvasOffset = canvas.offset();

    function drawStarTool(){
      $('button[name=star]').on('click', () => {
        var drag = false;
        canvas.drawPolygon({
          layer: true,
          draggable: true,
          bringToFront: true,
          strokeWidth: 2,
          // fillStyle: usrColor,
          fillStyle: '#fff',
          strokeStyle: '#333',
          // x: 100, y: 100,
          radius: 50,
          sides: 5,
          concavity: 0.5,
          mousemove: function(layer) {

          }

        });
      });
    }


    function drawTriangleTool() {
      $('button[name=triangle]').on('click', () => {
          // console.log("booyah");
        canvas.drawPolygon({
          layer: true,
          draggable: true,
          bringToFront: true,
          fillStyle: '#fff',
          strokeStyle: '#333',
          strokeWidth: 2,
          x: 160, y: 150,
          radius: 100,
          sides: 3,
        });
      });
    }

    function drawCircleTool() {
      $('button[name=circle]').on('click', () => {
        canvas.drawArc({
          draggable: true,
          bringToFront: true,
          fillStyle: '#fff',
          strokeStyle: '#333',
          strokeWidth: 2,
          x: 50, y: 50,
          radius: 30
        });
      });
    }

    function drawRectangleTool(x1, y1, x2, y2 ) {
      // $('button[name=rectangle]').on('click', (e) => {
      
        canvas.drawRect({
          fillStyle: '#fff',
          strokeStyle: '#333',
          strokeWidth: 2,
          x: x2, y: y2,
          draggable: true,
          bringToFront: true,
          width: x1,
          height: y1,
        });
      // });
    }

    // painting starts
    canvas.on('mousedown', () => {
      ismousedown = true;
    });
    // painting stops
    canvas.on('mouseup', () => {
      ismousedown = false;
      return;
    });

    canvas.on('mousemove', (e) => {
      lastPos.x = pos.x;
      lastPos.y = pos.y;

      pos.x = Math.floor(e.pageX - canvasOffset.left);
      pos.y = Math.floor(e.pageY - canvasOffset.top);

      if (ismousedown){
        drawRectangleTool(lastPos.x, lastPos.y, pos.x, pos.y);
      }

    });

    return {
      drawStarTool: drawStarTool,
      drawTriangleTool: drawTriangleTool,
      drawCircleTool: drawCircleTool,
      drawRectangleTool: drawRectangleTool,
    };
};
