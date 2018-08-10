app.controller("homeCtrl", function ($scope, user, $location) {


//Based on this snippet: http://stackoverflow.com/questions/3627042/jquery-animation-for-a-hover-with-mouse-direction

function mouse_enters(e){
    /** the width and height of the current div **/
    var w = $(this).width();
    var h = $(this).height();
    var speed = 100;
    
    /** calculate the x and y to get an angle to the center of the div from that x and y. **/
    /** gets the x value relative to the center of the DIV and "normalize" it **/
    var x = (e.pageX - this.offsetLeft - (w/2)) * ( w > h ? (h/w) : 1 );
    var y = (e.pageY - this.offsetTop  - (h/2)) * ( h > w ? (w/h) : 1 );
    
    /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
    /** first calculate the angle of the point, 
   add 180 deg to get rid of the negative values
   divide by 90 to get the quadrant
   add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
    var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
    var el_height = $(this).height();
    var el_width = $(this).width();
    
    /** do your animations here **/ 
    switch(direction) {
      case 0:
        /** animations from the TOP **/
        $(this).find('.hover')
        .show()
        .css({'top': '-'+el_height+'px', 'left': '0px'})
        .animate({ top: 0 }, speed);
        break;
      case 1:
        /** animations from the RIGHT **/
        $(this).find('.hover')
        .show()
        .css({'left': el_width+'px', 'top': '0px'})
        .animate({ left: 0 }, speed);
        break;
      case 2:
        /** animations from the BOTTOM **/
        $(this).find('.hover')
        .show()
        .css({'top': el_height+'px', 'left': '0px'})
        .animate({ top: 0 }, speed);
        break;
      case 3:
        /** animations from the LEFT **/
        $(this).find('.hover')
        .show()
        .css({'left': '-'+el_width+'px', 'top': '0px'})
        .animate({ left: 0 }, speed);
        break;
    }
  }
  
  function mouse_leaves(e){
    /** the width and height of the current div **/
    var w = $(this).width();
    var h = $(this).height();
    var speed = 100;
    
    /** calculate the x and y to get an angle to the center of the div from that x and y. **/
    /** gets the x value relative to the center of the DIV and "normalize" it **/
    var x = (e.pageX - this.offsetLeft - (w/2)) * ( w > h ? (h/w) : 1 );
    var y = (e.pageY - this.offsetTop  - (h/2)) * ( h > w ? (w/h) : 1 );
    
    /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
    /** first calculate the angle of the point, 
   add 180 deg to get rid of the negative values
   divide by 90 to get the quadrant
   add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
    var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
    var el_height = $(this).height();
    var el_width = $(this).width();
    
    /** do your animations here **/ 
    switch(direction) {
      case 0:
        /** animations from the TOP **/
        $(this).find('.hover')
        .animate({ top: '-'+el_height+'px' }, speed);
        break;
      case 1:
        /** animations from the RIGHT **/
        $(this).find('.hover')
        .animate({ left: el_width+'px' }, speed);
        break;
      case 2:
        /** animations from the BOTTOM **/
        $(this).find('.hover')
        .animate({ top: el_height+'px' }, speed);
        break;
      case 3:
        /** animations from the LEFT **/
        $(this).find('.hover')
        .animate({ left: '-'+el_width+'px' }, speed);
        break;
    }
  }
  
  $(".overlay-link").on("mouseenter", mouse_enters);
  $(".overlay-link").on("mouseleave", mouse_leaves);

})