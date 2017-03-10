const newControls = function(canvas){
  let ismousedown = false;
  let pos = { x: 0, y: 0};
  let lastPos = { x: 0, y: 0 };
  let canvasOffset = $('canvas').offset();



  function loadImg() {
    let selectedFile;
    const input = $('input');
    const fileSelect = $('.fileSelect');
    const reader  = new FileReader();

    // load an image
    reader.addEventListener("load", function () {
    //  console.log(reader.result);

    // put that image up on canvas!!
     $('canvas').drawImage({
         source: reader.result,
         draggable: true,
         bringToFront: true,
         x: 150, y: 150,
         width: 400,
         height: 400,
         fromCenter: false,
         scale: 1
         });
      }, false);

    // loads file and prevent page refresh
    fileSelect.on('click', (ev) => {
     ev.preventDefault();
     input.click();
    });

     // store the file AFTER you select it
    input.on('change',function(ev){
     const storedFile = this.files[0];
     console.log(storedFile);
     if (storedFile) {
       const thing = reader.readAsDataURL(storedFile);
      }
    });


  }

  function clearCanvas(){
    // $('button[name=clear]').on('click', function (){
    //   console.log("booyah");
    //   $('canvas').removeLayers();
    // });
  }

  function drawLineTool(){
  }

    function drawPenTool(x1, y1, x2, y2){
      $('button[name=pen]').on('click', () => {
        drawing(x1, y1, x2, y2);
      });
    }
    function drawing (x1, y1, x2, y2) {
      canvas.drawLine({
        strokeStyle: '#333',
        strokeWidth: 10,
        rounded: true,
        strokeJoin: 'round',
        strokeCap: 'round',
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,

      });

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

    pos.x = e.pageX - canvasOffset.left;
    pos.y = e.pageY - canvasOffset.top;

    if (ismousedown){
      drawPenTool(lastPos.x, lastPos.y, pos.x, pos.y);
    }

  });

  function colorPickerTool(){

  }


    return {
      loadImg: loadImg,
      clearCanvas: clearCanvas,
      drawLineTool: drawLineTool,
      drawPenTool: drawPenTool,
      colorPickerTool: colorPickerTool
    };
};
