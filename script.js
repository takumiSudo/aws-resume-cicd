/**
 * Resume concept based on the Dribbble by John Wilson http://dribbble.com/shots/900308-Resume?list=users
 **/



$(document).ready(function () {
    // Typing animation setup
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
          current = 0,
          elem = this;
      var interval = setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        } else {
          clearInterval(interval); // Stop the interval when done
        }
      }, 80);
    };
  
    // Trigger typing animation
    $("#holder").writeText("AI/ML-Ops Developer + Cloud Infrastructure Engineer");
  
    // Animations for items
    $('#item1').animate({ borderBottomWidth: '200px' }, 1000);
    $('#item2').animate({ borderBottomWidth: '100px' }, 1000);
    $('#item3').animate({ borderBottomWidth: '100px' }, 1000);
  });