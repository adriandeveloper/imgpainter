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

    function drawRectangleTool() {
      // $('button[name=rectangle]').on('click', (e) => {

        // canvas.drawRect({
        //   fillStyle: '#fff',
        //   strokeStyle: '#333',
        //   strokeWidth: 2,
        //   x: 13,
        //   y: 145,
        //   draggable: true,
        //   bringToFront: true,
        //   fromCenter: false,
        //   cursors: 'crosshairs',
        //   // scale: 1,
        //   width: 200,
        //   height: 200,
        // });
      // });

      $('canvas').draw({
        fn: function(ctx) {
        ctx.fillStyle = '#333';
        ctx.fillRect(50, 50, 100, 100);
      }
});
    }

    canvas.on('mousedown', () => {
      // drawRectangleTool();
    });

    canvas.on('mousemove', (e) => {

      pos.x = Math.floor(e.pageX - canvasOffset.left);
      pos.y = Math.floor(e.pageY - canvasOffset.top);
    });

    canvas.on('click', () => {
      lastPos.x = pos.x;
      lastPos.y = pos.y;
      // drawRectangleTool(lastPos.x, lastPos.y);

    });

    return {
      drawStarTool: drawStarTool,
      drawTriangleTool: drawTriangleTool,
      drawCircleTool: drawCircleTool,
      drawRectangleTool: drawRectangleTool,
    };
};
