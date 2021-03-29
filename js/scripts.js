$(document).ready(function () {
  $("form#fav-form").submit(function (event) {
    const favFood = $("#fav-food").val();
    const favColor = $("#fav-color").val();
    const favProgLang = $("#fav-prog-lang").val();
    const favAnimal = $("#fav-animal").val();
    let favThings = [favFood, favColor, favProgLang, favAnimal];
    let outOfOrder = [];

    let secondThing = favThings[1];
    let firstThing = favThings[0];
    let thirdThing = favThings[2];

    outOfOrder.push(secondThing, firstThing, thirdThing);

    $("form#fav-form").submit(function () {
      $("ul").append("<li>" + outOfOrder[0] + "</li>");
      $("ul").append("<li>" + outOfOrder[1] + "</li>");
      $("ul").append("<li>" + outOfOrder[2] + "</li>");
    });

    event.preventDefault();
  });
});
