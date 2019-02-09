$(document).ready(function(){

  $(".mark-devoured").on("click", function() {

    // read id from button
    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "PUT"
    }).then(function(data) {
      location.reload();
    });

  });

  $(".delete").on("click", function () {

    // read id from button
    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  })

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    // package up todo
    const burgerItem = {
      burger_name: $("#burger-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerItem // req.body
    })
    .then(function(data) {
      location.reload();
    });
  });

});