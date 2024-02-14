$(function() {
    $(".pageLoader").click(function() {
      $page = $(this).data("page") ;
      console.log("log message:" + $page);
      $("#content").load($page);
    });
  });
 
  $(document).ready(function(){
		$('#Inhalt').load("footer.html");
	});