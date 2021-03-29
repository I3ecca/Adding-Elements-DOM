//Uncomment sections to see the effect of each JQuery filtering method!


$(function () {

  // $("#list").find("li").filter(":even").css("background-color", "rgba(255, 0 ,0, 0.8)");

  // $("li").filter(function(index){
    //returns true or false based on how each index calculates in this expression. 

    // every element that returns false will be removed from your element style changes. 
  // return index % 3 === 0;
  // }).css("background-color", "rgba(255, 0 ,0, 0.8)");


  //also you can filter by first elements and last elements like so:
  // $("li").first().css("background-color", "rgba(100,100,250,0.8)")
  // $("li").last().css("background-color", "rgba(100,100,250,0.8)")
  //You can also use the eq funciton to get any index you want! Here we are selecting the th element
  // $("li").eq(5).css("background-color", "rgba(100,100,250,0.8)")

  //You can also filter by when a function is NOT something like so: In this case we want to highilght everything that is not the first li element!
  $("li").not(":first").css("background-color", "rgba(100,100,250,0.8)")
});


//Using the filter function, we can search through our code and find the element we want to mainpulate. 

// If you use a function as a parameter for your filter function, it will treat the passed in variable as an index for each element it is filtering for! In this case, we are looking for all the li elemenet, and FOR EACH li element it find, it will run that function we specify!

//The function return a boolean! If the functoin returns true, it will return the elements of that element set!

// In this case, it only return the elements in which when it is divided by three there is no remainder! 

//Now you can see all the way you can restrict your filtering!