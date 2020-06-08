$(document).ready(function(){
    $flame = $(".flame");
    $trans = $(".trans");
    $flame.hide()
    $( "#picture-box-candle-one" ).hover(
      function() {
      $trans.addClass('open');
      $flame.show()
      }
    );
  }
);