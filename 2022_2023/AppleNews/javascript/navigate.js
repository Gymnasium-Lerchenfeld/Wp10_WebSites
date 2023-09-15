$(function() {
    $(".pageLoader").click(function() {
      $page = $(this).data("page") ;
      console.log("log message:" + $page);
      $("#inhalt").load($page);
    });
  });

$(document).ready(function(){
    $('#inhalt').load("inhalt.html");
 });