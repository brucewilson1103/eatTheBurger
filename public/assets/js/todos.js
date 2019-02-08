$(document).ready(function(){

  $(".mark-complete").on("click", function() {

    // read id from button
    const todoId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + todoId,
      method: "PUT"
    }).then(function(data) {
      location.reload();
    });

  });

  $(".delete").on("click", function () {

    // read id from button
    const todoId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + todoId,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  })

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    // package up todo
    const todoItem = {
      burger_name: $("#todo-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: todoItem // req.body
    })
    .then(function(data) {
      location.reload();
    });
  });

});