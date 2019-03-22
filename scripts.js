$("#search").on("click", function() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    data: {
      zipcode: 97201
    },
    success: function( result ) {
      $("#results").html(JSON.stringify(result));
    }
  });
});