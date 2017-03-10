const newControls = function(canvas){
  let ismousedown = false;
  let pos = { x: 0, y: 0};
  let lastPos = { x: 0, y: 0 };
  let canvasOffset = canvas.offset();
  // const ctx = colorwheel.getContext('2d');



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
    //  console.log(storedFile);
     if (storedFile) {
       const thing = reader.readAsDataURL(storedFile);
      }
    });


  }

  function clearCanvas(){
    $('button[name=clear]').on('click', function (){
      console.log("booyah");
      $('canvas').removeLayers();
    });
  }

  function drawLineTool(){
  }

    function drawPenTool(x1, y1, x2, y2){
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

    pos.x = Math.floor(e.pageX - canvasOffset.left);
    pos.y = Math.floor(e.pageY - canvasOffset.top);

    if (ismousedown){
      drawPenTool(lastPos.x, lastPos.y, pos.x, pos.y);
    }

  });

  function colorPickerTool(){
    let preview = true;
    // let img = new Image();
    // img.src = './resources/images/colorwheel.png';
    // img.src = 'https://www.dropbox.com/s/n8f3lkkoz0k0okq/colorwheel.png?dl=0';
    // img.src = 'http://www.fotoview.nl/help/examples/gradient4.png';
    // for (let i = 0; i < 360; i++) {
    //   let color = $('<span>');
    //   color.setAttribute("id", "d" + i);
    //     color.style.backgroundColor = "hsl(" + i + ", 100%, 50%)";
    //   $('.colorwheel').appendChild(color);
    // }

    $('#colorwheel').drawImage({
      source: './resources/images/bears1.jpg',
      width: 300,
      height: 300,
      scale: 1
    });

    $('#colorwheel').on('mousemove', (e) => {
      if (preview){
      // get mouse coordinates...again
      pos.x = Math.floor(e.pageX - canvasOffset.left);
      pos.y = Math.floor(e.pageY - canvasOffset.top);

      // get current pixel
      let imageData = ctx.getImageData(pos.x, pos.y, 1, 1);
      let pixel = imageData;

      // update pixel color
      let pixelColor = "rgb("+pixel[0]+ ","+pixel[1]+","+pixel[2]+")";
      $('.preview').css('backgroundColor', pixelColor);

      }
    });

    $('#colorwheel').on('click', () => {
      preview = !preview;
    });
    $('#colorwheel').on('click', () => {
      $('#colorwheel').fadeToggle("slow", linear);
      preview = true;
    });

  }

  function blurTool(){
    $('button[name=blur]').on('click', () => {
      this.filter = 'blur(105px)';
      console.log("booyah");
    });
  }


    return {
      loadImg: loadImg,
      clearCanvas: clearCanvas,
      drawLineTool: drawLineTool,
      drawPenTool: drawPenTool,
      colorPickerTool: colorPickerTool,
      blurTool: blurTool
    };
};
