
var items = document.querySelectorAll(".timeline li");


// code for the isElementInViewport function

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {

    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

var times = document.getElementsByClassName("timeElement");
/*
for (var j = 0; j < items.length; j++) {
  if(items[j].offsetHeight>300 && j!=5)
  {
     console.log("exactly");
     times[j].classList.add("setHeight");
  }

}

for (var k = 0; k < items.length; k++) {
  items[j].onmouseover = function(){
    if ( $( times[j] ).hasClass( "setHeight" ) ) {
      alert(k);
    }
  };
}
*/
setTimeout(function()
{
	var max = 500;
  var tot, str;
  $('.timeElement').each(function() {
  	str = String($(this).html());
  	tot = str.length;
    str = (tot <= max)
    	? str
      : str.substring(0,(max + 1))+"...";
    $(this).html(str);
  });
},500);
