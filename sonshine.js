
var items = document.querySelectorAll(".timeline li");
var og;


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
    og=str;

  	tot = str.length;
    if(tot>=max)
    {
      $(this).addClass("short")
    }
    str = (tot <= max)
    	? str
      : str.substring(0,(max + 1))+"...";
    $(this).html(str);
  });
},500);


$('.timeElement').hover( e => {
  if($(e.target).hasClass("short"))
  {
    $(e.target).addClass("hover");

    if($(e.target).hasClass("one"))
    {
      $(e.target).html("<time><strong>1975 - </strong></time>The camp was founded by two Azusa Pacific University graduates <u><a  class = 'linkcol'href='https://homeword.com/about/jim-burns/' target = '_blank'>Jim Burns</a> </u>and <a class = 'linkcol'href='http://www.crossroadscov.com/staff' target = '_blank'><u>Russ Blake.</u></a>  Jim and Russ both had a passion for youth and a vision for youth ministry in a small group recreational setting.  With ties to northern California, a road trip north landed them on the levies of the Sacramento River Delta.  The two decided that a houseboat would be the perfect venue for this new ministry adventure God had been revealing in their hearts.  After a financial sacrifice from Jim, the first Sonshine Ministries houseboat was purchased, a 42 foot 'Boatel'. The camp operated out of Bethel Island for the first few summers.");
    }

    if($(e.target).hasClass("three"))
    {
      $(e.target).html("<time><strong>1978-79 - </strong></time>  The summer of 1978 the camp found its new home at Walnut Grove Marina.  The marina decided to build two 'specialty' houseboats constructed perfectly to meet the needs and demands of the camp.  Upon their maiden voyage one of these 'specialty' houseboats sank! In 1979 the camp moved again this time to Turner Cut. 1978/79 Sonshine Ministries changed its name to Pacific Coast Study Center.  Jim's dream was to train youth leaders and host conferences.  Camp finances and resources were leveraged to attain this new vision.");
    }

    if($(e.target).hasClass("four"))
    {

      $(e.target).html("<time><strong>1980-85 - </strong></time>1981 brought another 'new' home for the camp, King Island Marina.  King Island offered the camp the ability to grow through renting houseboats.  The camp expanded to 6 houseboats a week for 6-8 weeks a summer.  This was the 'norm' for the next 3 years. By mid summer 1981 the camp had run out of money.  A board of directors member loaned the camp the money needed to make it through the summer.  Following the 1981 summer Jim and Russ decided to step aside from running the day to day ministry and name Brad Vanderhamm the new Executive Director.  Brad had been directing the camp since 1978.  Jim moved on to new ministry adventures while Russ remained on the Board of Directors for a few more summers before moving on to become a youth pastor at a church. The camp once again underwent a name change.  Sonshine Specialized Camping Ministries was the new name by the summer of 1982. Another move!  Imagine youth pastors telling parents that they are taking their kids to 'Whisky Slough' for a Christian houseboat retreat.  For two summers Whisky Slough Marina was home to the fleet.  One notable Whisky Slough moment was a marina fire that resulted in burning an entire side of one of Sonshine's houseboats.")
    }
    if($(e.target).hasClass("five"))
    {
      $(e.target).html("<time><strong>1986-97 - </strong></time>The final move in 1986 brought the camp to Paradise Point Marina where the Delta camp still is today.  This move also brought about the relationship with Seven Crowns Resorts our houseboat provider.  The summer of 1990 birthed the satellite camp on Lake Shasta.  Bridge Bay Marina was home to Sonshine Specialized Camping Ministries on Lake Shasta.  In 1991 Sonshine entered into a relationship with Larson Marine a local boat dealership.  This unique relationship allowed Sonshine to grow while keeping camper prices low.  In 1993 the growth continued with the expansion of the camp to Lake Mojave.  Katherine Landings Marina was home to Sonshine Specialized Camping Ministries on Lake Mojave.  In 1996 the Shasta camp moved to Digger Bay Marina and operated there until 2008.  By 1997 the cost to operate our Mojave camp became too much and clients were redirected to our Shasta Camp.  The summer of 1997 was our last on Lake Mojave.");
    }
    if($(e.target).hasClass("seven"))
    {
      $(e.target).html("<time><strong>1998-2001 - </strong></time>From 1998-2006 the houseboats were transformed into classrooms for one week during the fall.  5th graders invaded the docks at the Delta as a science camp experience.  They learned about the uniqueness of the Delta and Archimedes principle law of buoyancy.  1999-2001 the camp experimented with the idea of an another camp.  Bikes and Kayaks were purchased to run an adventure camp simultaneous to houseboats.  The camp ran a few pilot trips but never gained enough traction to launch a full camp experience and shut down the project in 2001.");
    }
    if($(e.target).hasClass("eight"))
    {
      $(e.target).html("<time><strong>2004 - </strong></time>December 31, 2003 Brad Vanderhamm decided to move from Sonshine to a non-profit teen center in Lodi. For 22 years God used Brad to guide and direct the camp.  January 1, 2004 Steve Mann took over as Executive Director and President of Sonshine Specialized Camping Ministries.  Steve had been a camper from 1982-1987 and came on staff summer 1988.  In 1994 Steve came on full time with Sonshine as Brad's right hand man running the operations of the camp.  Now 10 years later it was Steve's turn to hear from God and guide and direct the camp.  Today Steve and Camp Director Reid Delgado recruit, train, and lead a team of 100 + staff people during the summer.");
    }
    if($(e.target).hasClass("nine"))
    {
      $(e.target).html("<time><strong>2005-Present - </strong></time>Since 2005 the camp has continued to grow steadily on both locations.  In 2005 the Delta camp grew to 10 houseboats a week for 8-10 weeks.  In 2007 our Shasta camp grew to 10 boats a week for 8-10 weeks.  2008 was the camp's largest summer ever topping 3000 campers in 10 weeks.  189 houseboats left the docks filled with campers.  2009 brought on a new challenge.  With a poor economy Larson Marine was unable to supply ski boats to Sonshine for the first time in 17 years.  The camp turned to the private sector and purchased 11 ski boats to fill the void.  2009 also saw Sonshine launch a new ministry called <u><a href='http://www.churchbuilders.biz/' target = '_blank' class = 'linkcol'>Church Builders.</a> </u> Over the last four years Church Builders has provided customer tailored solutions to pastors, educators, and leaders for the healthy growth and development of their organizations. In 2012 for the first time in camp history Sonshine ran over 200 houseboat trips serving over 3500 students with 222 houseboat trips.  The largest summer to date in camp history.  2013 & 2014 brought another 200+ houseboat year.  With great excitement and anticipation we wait to see what 2016 will hold for Sonshine Specialized Camping Ministries.");
    }
  }




}, e => {
  $(e.target).removeClass("hover");
});
