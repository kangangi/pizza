function Pizza(pizzaFlavor, size, crust,toppings){
  this.size = size;
  this.pizzaFlavor = pizzaFlavor;
  this.crust = crust;
  this.toppings = toppings;
}


$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();
    var inputtedDelivery= $("input[name=delivery]:checked").val();
    var inputtedSize = $("input[name=size]:checked").val();
    var inputtedFlavor =$("input[name=pizza]:checked").val();
    var inputtedCrust =$("#crust").val();
    var toppings = [];
    $.each($('input[name="toppings"]:checked'),
      function () {
        toppings.push($(this).val());
      }
    );
    var sizeCost = 0;
    var crustCost = 0;
    var toppingCost=0;
    var deliveryCost = 0 ;
    //size costing
    if (inputtedSize ==="small"){
      sizeCost += 500;
    } else if(inputtedSize ==="medium"){
      sizeCost += 750;
    }else{
     sizeCost += 1000;
   };

   //crust costing
    if (inputtedCrust ==="thin"){
      crustCost += 0;
    } else if(inputtedCrust === "thick"){
     crustCost += 100;
    } else if (inputtedCrust === "gluten-free"){
     crustCost += 200;
    }else {
      crustCost += 150;
    };

    //topping costing
    if (document.getElementById("bacon").checked){
      var bacon = true;
    }
    if (document.getElementById("peporoni").checked){
      var peporoni = true;
    }
    if (document.getElementById("cheese").checked){
      var cheese = true;
    }
    if (document.getElementById("onions").checked){
      var onions = true;
    };

    if (bacon === true){
      if (inputtedSize === "small"){
        toppingCost += 50;
      }else if (inputtedSize === "medium"){
        toppingCost += 100;
      }else {
       toppingCost += 150;
      };
    };
    if (peporoni === true){
      if (inputtedSize === "small"){
        toppingCost += 60;
      }else if (inputtedSize === "medium"){
        toppingCost += 120;
      }else {
        toppingCost += 180;
      };
    };

    if (cheese === true){
      if (inputtedSize === "small"){
        toppingCost+= 40;
      }else if (inputtedSize === "medium"){
        toppingCost += 80;
      }else {
        toppingCost += 120;
      };
    };
    if (onions === true){
      if (inputtedSize === "small"){
        toppingCost += 30;
      }else if (inputtedSize === "medium"){
        toppingCost += 60;
      }else {
       toppingCost += 90;
      };
    };
    //delivery costing
      if (inputtedDelivery === "delivery"){
         deliveryCost = 200;
      } else {
          deliveryCost =0;
      };

      var total1 =  sizeCost + crustCost + toppingCost;
      var total = total1 + deliveryCost;

      $("#show-order"). show();
      $(".userName").text("Hey " + inputtedName + "! Your order is:");
      $(".pizza-type").text(inputtedSize + ", " + inputtedFlavor+" pizza with " + inputtedCrust +" crust and " + toppings + " as extra toppings");
      $(".pizza-total1").text("Your total is " + "KSH"+ total1);

      $("#checkout-btn").click(function(){
        $("#checkout"). show();

        if (inputtedDelivery === "delivery"){
          $(".total").text("Your total is KSH" +total);
          $("#show-location").show();
          $(".delivery-location").text("This is to be delivered at " +inputtedLocation);
        }else{
         $(".total").text("Your total is KSH" +total);
        }
      });
      });

    });




        //toppings costings
        /*Pizza.prototype.toppingCosting = function(bacon,peporoni,cheese,onions){
          /*
          return toppingCost;
        };*/
