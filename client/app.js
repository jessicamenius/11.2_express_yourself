$(document).ready(function () {
  //   console.log("Hello!");

  //   //basic test
  //   $.ajax({
  //     type: "GET",
  //     url: "/api",
  //     datatype: "json",
  //   }).then((res) => {
  //     console.log(res);
  //   });

  //   //proof
  //   $.ajax({
  //     type: "GET",
  //     url: "/api/proof",
  //     datatype: "json",
  //   }).then((res) => {
  //     console.log(res);
  //   });

  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/count",
      datatype: "json",
    }).then((res) => {
      console.log(res);
      $(".text").html(`Count: ${res.count}`);
    });
  });
});
