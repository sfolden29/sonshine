fixPad();
function fixPad(){


  var screenHeight = window.innerHeight;
  var clientHeight = document.getElementById('adder').clientHeight;

  var h1MarginTop = parseInt( $("#indexH1").css("marginTop") );



  var divHeights = clientHeight+h1MarginTop;

  var topmar = screenHeight-divHeights;
  //console.log(divHeights +" divheights")
  //console.log(topmar+" calculated margin")
  //console.log(screenHeight+" screen height")

  document.getElementById("jsgod").style.marginTop = topmar+"px";
  //console.log(document.getElementById("jsgod").style.marginTop)

}
