$(document).ready(function(){
  $("#get_color").click(function(event){
    $.post("/color", function(response){
      var cell = response.cell.toString();
      var color = response.color;
      var selected_cell = $("li:nth-child(" + cell + ")");
      selected_cell.css("backgroundColor", color);
    });
  });
});
