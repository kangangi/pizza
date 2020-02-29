function Order(name,type,total){
  this.name = name;
  this.type = [];
  this.total = total;
}

function PizzaType(pizzaFlavor, size, crust, toppings){
  this.size = size;
  this.pizzaFlavor = pizzaFlavour;
  this.crust = crust;
  //this.toppings = toppings;
}

$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedSize = $("input:radio[name=size]:checked").val();
    var inputtedFlavor =$("input:radio[name=pizza]:checked").val();
    var inputtedCrust =$("#crust").val();

    if (inputtedSize ==="small"){
      var sizeCost = 500;
    } else if(inputtedSize ==="medium"){
      var sizeCost = 750;
    }else{
      var sizeCost = 1000;
    }

    if (inputtedCrust ==="0"){
      var crustCost = 0;
    } else if(inputtedCrust === "1"){
      var crustCost = 100;
    }else if (inputtedCrust === "2"){
      var crustCost = 200;
    }else {
      var crustCost = 150;
    }
    var total =  sizeCost + crustCost
    //var newOrder = new Order(inputtedName,total);
    //var newType = new PizzaType(inputtedSize, inputtedFlavor, inputtedCrust)
    $("#show-order").show();
    $("#show-order h2").text("Your order is:");
    $(".pizza-size").text(inputtedSize);
    $("pizza-crust").text(inputtedCrust);
    $(".pizza-total").text(total);
    /*if (document.getElementById("bacon").checked){
      var bacon = 1;
    }
     if (document.getElementById("peporoni").checked){
      var peporoni = 2;
    }
    if (document.getElementById("cheese").checked){
      var cheese = 3;
    }
    if (document.getElementById("onions").checked){
      var onions = 4;
    }


    if (bacon === true){
      switch(inputtedSize){
        case "small":
          var baconCost = 30;
        break;
        case "medium":
          var baconCost = 40;
        break;
        case "large":
          var baconCost = 50;
        break;
      };
    };

    if (peporoni === true){
      switch(inputtedSize){
        case "small":
          var peporoniCost = 80;
        break;
        case "medium":
          var peporoniCost = 130;
        break;
        case "large":
          var peporoniCost = 180;
        break;
      };
    };

    if (cheese === true){
      switch(inputtedSize){
        case "small":
          var cheeseCost = 60;
        break;
        case "medium":
          var cheeseCost = 90;
        break;
        case "large":
          var cheeseCost = 120;
        break;
      };
    };

    if (onions === true){
      switch(inputtedSize){
        case "small":
          var onionCost = 30;
        break;
        case "medium":
          var onionCost = 40;
        break;
        case "large":
          var onionCost = 50;
        break;
      };
    };*/
  });
});
