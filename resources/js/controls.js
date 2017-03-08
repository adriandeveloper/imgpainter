const controls = function(){


    function heavyLifting(){
      console.log("does heavy lifting");
    }

    function drawShape(){
      heavyLifting()
      console.log("does stuff");
    }

    return {
      drawShape: drawShape
    };
}();


// var thing = "booyah"
