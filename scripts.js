//Uncomment lines of code to see the effects in the live server HTML doc. 

//Adding new Elements to the DOM\
$(function () {
  //Using the append funciton, you can add elements as a child of the elements selected. If there are multiple elements selected, you are going to add a new child for each of those!
// $("ul ul:first").append("<li>I'm going to be the last sub-item!");

//we can also add items to the DOM by selecting the elements we want to add and then appendTo the element(s) we want. 
// $("<li>I'm going to be the last sub-item!</li>").appendTo($("ul ul:last"))

//The prepend() method inserts specified content at the begining of the selected elements. 
// $("ul ul").prepend("<li>I'm going to be the first sub-item!</li>")

//Just like before, you can also use a method called prependTo() to have the same effect. You dont have to use the dollar sign. 
// $("<h4>Peter Sommerhoff</h4>").prependTo("#content");

//You can also add elements as a sibling to any element you select. Using the after() method you can add a sibling element after element(s) with the red-box class. 
// $(".red-box").after("<div class ='red-box'> Another Red Box </div>")

//Similarly, you can add an element before a specified element(s) as a sibling. 
// $(".blue-box").before("<div class ='blue-box'> Another Blue Box </div>")


//You can also pass in a function as a paramter of the before method. As you can see below, we passed in a function that returns a new div that will come before the green box class we selected. This new element will be a sibling. 
// $(".green-box").before(function(){
//   return "<div class='green-box'> A new Green Box! </div>";
// })

// As you can see, the red box is now moved to this new place, as a previous sibling of the blue box. The red box is moving the element to the new position before the blue box. 
// $(".blue-box").before($(".red-box"));


//Now after each p, there is a for each after insertion point, JQuery will clone it. 
// $("p").after($("#list"));


//quick mini challenge! Add a new box as a sibling to each of the boxes. 

// $(".red-box").after("<div class ='red-box'> Sibling Red Box </div>");
// $(".blue-box").after("<div class ='blue-box'> Sibling Blue Box </div>");
// $(".green-box").after("<div class ='green-box'> Sibling Green Box </div>");

});
// Replacing New Elements and Content
$(function () {
//Using the replaceWith() method, you can replace the selected element(s) with what you want.Notice how when this is implemented, that there are only 4 li items. This is because the sub li items are completely gone and replace with the text we specified. 

//You can also pass in a function wth the replaceWith method!

  $("li").replaceWith("<li>Replaced</li>");

//You can also set a variable to a JQuery object and then you can replace the item with that variable. 

  let firstListItem = $("li:first");

  $("p:first").replaceWith(firstListItem);

  //Mini Project, replace all the red and blue boxes on the page with a green box!

  //this soultion works to change them seperately and with different text inside each to specify what was replaced.
  // $(".red-box").replaceWith("<div class='green-box'>Replacing the red box!</div>");
  // $(".blue-box").replaceWith("<div class='green-box'>Replacing the blue box!</div>");

  //This soultion can replace both with one line of code!
  $(".red-box, .blue-box").replaceWith("<div class='green-box'>Replacing the Red and Blue box!</div>");

  //You can also do it in reverse order ilke we did before with prepend and append. 
  $("<div class='pink-box'>We're all PINK now!</div>").replaceAll(".red-box, .blue-box, .green-box" );





});