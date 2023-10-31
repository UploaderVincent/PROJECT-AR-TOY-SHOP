AFRAME.registerComponent("createbuttons", {
  init: function() {
    // 1. Create the Order button
    var button1 = document.createElement("button");
    button1.innerHTML = "ORDER NOW";
    button1.setAttribute("id", "order-button");
    button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

    ////TASK🙂
    // 2. Create the Bill button with text-"ORDER SUMMARY" , id as "order-summary-button" 
    //    and class as "btn btn-danger ml-3 mr-3"
    var button2 = document.createElement("button");
    button2.innerHTML = "Order Summary";
    button2.setAttribute("id", "order-summary-button");
    button2.setAttribute("class", "btn btn-danger ml-3");
   
    //TASK🙂
    // 1. Create the Rating button with text-"RATE NOW" , id as "rating-button" 
    //    and class as "btn btn-danger ml-3 mr-3"
    var button3 = document.createElement("button");
    button3.innerHTML = "Rate Now";
    button3.setAttribute("id", "rating-button");
    button3.setAttribute("class", "btn btn-danger ml-3");


    // 3. Append somewhere
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button3);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button1);
  }
});
