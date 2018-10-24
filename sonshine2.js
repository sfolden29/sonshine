fixPad();
function fixPad(){


  var screenHeight = screen.height;
  var clientHeight = document.getElementById('indexH1').clientHeight;
  var clientHeight2 = document.getElementById('indexH2').clientHeight;
  var h1MarginTop = parseInt( $("#indexH1").css("marginTop") );
  var h1MarginBottom = parseInt( $("#indexH1").css("marginBottom") );

  var divHeights = clientHeight+clientHeight2+h1MarginTop+h1MarginBottom;

  var topmar = screenHeight-divHeights;
  document.getElementById("jsgod").style.marginTop = topmar+"px";

}
