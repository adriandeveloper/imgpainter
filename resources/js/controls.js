const newControls = function(canvas){

    function loadImg(){
      let selectedFile;
      const input = $('input');
      const fileSelect = $('.fileSelect');

      $('canvas').drawImage({
        source: './resources/images/bears1.jpg',
        draggable: true,
        bringToFront: true,
        x: 150, y: 150,
        width: 280,
        height: 300,
        fromCenter: false

      });
      // loads file and prevent page refresh
      fileSelect.on('click', (ev) => {
        ev.preventDefault();
        input.click();
      });
    }

  function clearCanvas(){
    $('canvas').on('click', function (){
      console.log("booyah");
    });
    // $canvas.clearCanvas();
  }

    return {
      loadImg: loadImg,
      clearCanvas: clearCanvas
    };
};
