$(document).ready(function(){

  $(".page").each(function(i, e) {
    var $e = $(e);
    var url = "/views/" + $e.attr("id").replace("_content",".html");
    $.get(url, function(html) { $e.html(html); });
  });

});
