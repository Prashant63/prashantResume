$(document).ready(function(){
  $(".tab_content").click(function(){
    var tab = $(this).attr("data-tab");
    $(".section").hide();
    $("#firstTimeText").hide();
    $("#" + tab + " .section").show();
  });
});