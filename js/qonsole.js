var qonsole = function() {
  "use strict";

  var init = function() {
    $(".sidebar-nav .btn-group").each( function(i,b) {$(b).button();} );
    $("#layout-options .btn").click( onSelectLayout );
  };

  var onSelectLayout = function( e ) {
    e.preventDefault();
    if ($(e.target).attr("data-layout") === "vertical") {
      $("#query-block").removeClass("span5").addClass("span10");
      $("#results-block").removeClass("span5").addClass("span10");
    }
    else {
      $("#query-block").removeClass("span10").addClass("span5");
      $("#results-block").removeClass("span10").addClass("span5");
    }
  };

  return {
    init: init
  }
}();

$(function() {qonsole.init();});
