const shapes = function(canvas){

    // console.log(shapes);
    function drawStar(){
      $('button[name=star]').on('click', () => {
        var drag = false;
        canvas.drawPolygon({
          layer: true,
          draggable: true,
          bringToFront: true,
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

    function drawTriangle() {
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

    function drawCircle() {
      $('button[name=circle]').on('click', () => {
        canvas.drawArc({
          draggable: true,
          bringToFront: true,
          fillStyle: '#58d',
          shadowColor: '#000',
          shadowBlur: 40,
          shadowX: -15, shadowY: 5,
          x: 50, y: 50,
          radius: 30
        });
      });
    }

    function drawRectangle() {
      $('button[name=rectangle]').on('click', () => {
        canvas.drawRect({
          fillStyle: '#000',
          x: 200, y: 200,
          draggable: true,
          bringToFront: true,
          width: 100,
          height: 200,
        });
      });
    }


  //
  //
    return {
      drawStar: drawStar,
      drawTriangle: drawTriangle,
      drawCircle: drawCircle,
      drawRectangle: drawRectangle,
    };
};
