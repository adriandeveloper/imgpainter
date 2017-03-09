const newControls = function(canvas){

    let offset = $('canvas').offset();

    function loadImg() {
      let selectedFile;
      const input = $('input');
      const fileSelect = $('.fileSelect');

      const reader  = new FileReader();

       reader.addEventListener("load", function () {
         console.log(reader.result);


           $('canvas').drawImage({
             source: reader.result,
             draggable: true,
             bringToFront: true,
             x: 150, y: 150,
             width: 280,
             height: 300,
             fromCenter: false
             });


       }, false);



      // loads file and prevent page refresh
      fileSelect.on('click', (ev) => {
        ev.preventDefault();

        input.click();
      });

      // after you select the file, store the file
      input.on('change',function(ev){
        if (this.files[0]) {
          const storedFile = this.files[0];
          const thing = reader.readAsDataURL(storedFile);
        }
      });


      }

  function clearCanvas(){
    $('button[name=clear]').on('click', function (){
      $('canvas').removeLayers();
    });
  }

  function drawLine(newControls){
  //
  }
    return {
      loadImg: loadImg,
      clearCanvas: clearCanvas,
      drawline: drawLine,
    };
};
