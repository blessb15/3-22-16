$(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("paragraph").dblclick(function() {
    alert("This is a paragraph.");
  });

  $("img").hover(function() {
    alert("This is an image.");
  });

  $("ul").dblclick(function() {
    alert("This is a list.");
  });

});
