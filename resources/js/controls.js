const newControls = function(canvas){

  let offset = $('canvas').offset();

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
    $('button[name=clear]').on('click', function (){
      $('canvas').removeLayers();
    });
  }

  function drawLineTool(){
  }

  function drawPenTool(){
  }

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
