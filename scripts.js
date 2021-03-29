$(function () {
  //Using the append funciton, you can add elements as a child of the elements selected. If there are multiple elements selected, you are going to add a new child for each of those!
$("ul ul:first").append("<li>I'm going to be the last sub-item!");

//we can also add items to the DOM by selecting the elements we want to add and then appendTo the element(s) we want. 
$("<li>I'm going to be the last sub-item!</li>").appendTo($("ul ul:last"))

//The prepend() method inserts specified content at the begining of the selected elements. 
$("ul ul").prepend("<li>I'm going to be the first sub-item!</li>")

//Just like before, you can also use a method called prependTo() to have the same effect. You dont have to use the dollar sign. 
$("<h4>Peter Sommerhoff</h4>").prependTo("#content");

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

$(".red-box").after("<div class ='red-box'> Sibling Red Box </div>");
$(".blue-box").after("<div class ='blue-box'> Sibling Blue Box </div>");
$(".green-box").after("<div class ='green-box'> Sibling Green Box </div>");

});