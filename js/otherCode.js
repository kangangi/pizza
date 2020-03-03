function Pizza(pizzaFlavor, size, crust,toppings){
  this.size = size;
  this.pizzaFlavor = pizzaFlavor;
  this.crust = crust;
  this.toppings = toppings;
}

var pizzas =[]
var sizeCost;
var crustCost;
var toppingCost=0;
var deliveryCost ;

$(document).ready(function(){
  $("#add-another-pizza").click(function(){
    $("#new-order").append('<br>'+'<p>Select a size:</p>'+'<div class="row">' + '<div class="col-md-4">'+
        '<div class="form-check">' + '<input class="form-check-input" type="radio" name="size" id="small" value="small" >'+
        '<label class="form-check-label" for="small">Small</label>' + '</div>'+'</div>' +
        '<div class="col-md-4">'+'<div class="form-check">'+'<input class="form-check-input" type="radio" name="size" id="medium" value="medium">'+
        '<label class="form-check-label" for="medium">Medium</label>'+'</div>'+'</div>'+
        '<div class="col-md-4">'+'<div class="form-check">'+'<input class="form-check-input" type="radio" name="size" id="large" value="large">'+
        '<label class="form-check-label" for="large">Large</label>'+'</div>'+'</div>'+'</div>'+
        '<p>Select type of pizza</p>'+'<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="margherita" value="margherita" >'+
        '<label class="form-check-label" for="margherita">Margherita</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="marinara"  value="marinara" >'+'<label class="form-check-label" for="marinara">Marinara</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="bbqchicken" value="bbqchicken" >'+'<label class="form-check-label" for="bbqchicken">Barbecue Chicken</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="bbqbeef" value="bbqbeef" >'+'<label class="form-check-label" for="bbqbeef">Barbecue Beef</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="hawaiian" value="hawaiian"  >'+'<label class="form-check-label" for="hawaiian">Hawaiian</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="sweet-chilli-chicken" value="sweet-chilli-chicken"  >'+'<label class="form-check-label" for="sweet-chilli-chicken">Sweet Chilli Chicken</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="original-veggie" value="original-veggie"  >'+'<label class="form-check-label" for="original-veggie">Original Veggie</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="chicken-tikka" value="chicken-tikka" >'+'<label class="form-check-label" for="chicken-tikka">Chicken Tikka</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="meat-fest" value="meat-fest" >'+'<label class="form-check-label" for="meat-fest">Meat fest</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="radio" name="pizza" id="pork-rib" value="pork-rib" >'+'<label class="form-check-label" for="pork-rib">Pork Rib</label>'+'</div>'+'<br>'+
        '<p>Select type of crust</p>'+'<select class="form-control" id="crust">'+
        '<option value="0">Thin Crust</option>'+'<option value="1">Thick Crust</option>'+'<option value="2">Glutten Free</option>'+'<option value="3">Cheese Stuffing</option>'+'</select>'+'<br>'+
        '<p>Select your choice of extra toppings</p>'+
        '<div class="form-check">'+'<input class="form-check-input" type="checkbox" name="toppings" id="bacon" >'+'<label class="form-check-label" for="bacon">Bacon</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="checkbox" name="toppings" id="peporoni" >'+'<label class="form-check-label" for="peporoni">Peporoni</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="checkbox" name="toppings" id="cheese" >'+'<label class="form-check-label" for="cheese">Cheese</label>'+'</div>'+
        '<div class="form-check">'+'<input class="form-check-input" type="checkbox" name="toppings" id="onions" >'+'<label class="form-check-label" for="onions">Onions</label>'+'</div>'+'</div>'
      )
      });
  $("form#order").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();
    var inputtedDelivery= $("input[name=delivery]:checked").val();


    $("#new-order").each(function(){
      var inputtedSize = $("input[name=size]:checked").val();
      var inputtedFlavor =$("input[name=pizza]:checked").val();
      var inputtedCrust =$("#crust").val();
      var toppings = [];
        $.each($('input[name="toppings"]:checked'),
          function () {
            toppings.push($(this).val());
        });
      var newPizza = new Pizza(inputtedFlavor,inputtedSize,inputtedCrust,toppings);
      pizzas.push(newPizza);

      Pizza.prototype.toppingCosting = function(toppings){
      for (var i = 0; i < toppings.length; i++){
        if (toppings[i] === "bacon" && inputtedSize ==="small"){
          toppingCost += 50;
        }
        if (toppings[i] === "bacon" && inputtedSize ==="medium"){
          toppingCost += 100;
        }
        if (toppings[i] === "bacon" && inputtedSize ==="large"){
          toppingCost += 150;
        }
        if (toppings[i] === "peporoni" && inputtedSize ==="small"){
          toppingCost += 80;
        }
        if (toppings[i]=== "peporoni" && inputtedSize ==="medium"){
          toppingCost += 160;
        }
        if (toppings[i]=== "peporoni" && inputtedSize ==="large"){
          toppingCost += 240;
        }

        if (toppings[i]=== "cheese" && inputtedSize ==="small"){
          toppingCost += 40;
        }
        if (toppings[i]=== "cheese" && inputtedSize ==="medium"){
          toppingCost += 80;
        }
        if (toppings[i] === "cheese" && inputtedSize ==="large"){
          toppingCost += 120;
        }
        if (toppings[i] === "onions" && inputtedSize ==="small"){
          toppingCost += 30;
        }
        if (toppings[i] === "onions" && inputtedSize ==="medium"){
          toppingCost += 60;
        }
        if (toppings[i] === "onions"&& inputtedSize ==="large"){
          toppingCost += 90;
        }
      };
      return toppingCost;
    };



      Pizza.prototype.sizeCosting = function(inputtedSize){
        if (inputtedSize ==="small"){
          sizeCost += 500;
        } else if(inputtedSize ==="medium"){
          sizeCost += 750;
        }else{
          sizeCost += 1000;
        }
      return sizeCost;
    }


      //crust costing
      Pizza.prototype.crustCosting = function(inputtedCrust){
        if (inputtedCrust ==="thin"){
         crustCost += 0;
        } else if(inputtedCrust === "thick"){
         crustCost += 100;
        }else if (inputtedCrust === "gluten-free"){
         crustCost += 200;
        }else {
         crustCost += 150;
        };
        return crustCost;
      };


      //delivery costing
      if (inputtedDelivery === "delivery"){
         deliveryCost = 200;
      } else {
          deliveryCost =0;
      };


      let piz = pizzas[0];
      piz.sizeCosting();
      piz.crustCosting();
      piz.toppingCosting();
      var total1 =  sizeCost + crustCost + toppingCost;
      var total = total1 + deliveryCost;

      $("#show-order"). show();
      $(".userName").text("Hey " + inputtedName + "! Your order is:");
      $(".pizza-type").text(piz.inputtedSize + ", " + piz.inputtedFlavor+" pizza with " + piz.inputtedCrust +" crust");
      $(".pizza-total1").text("Your total is " + "KSH"+ total1);

      $("#checkout-btn").click(function(){
        $("#checkout"). show();
        $(".total").text("Your total is KSH" +total);
        if (inputtedDelivery === "delivery"){
          $("#show-location").show();
          $(".delivery-location").text("This is to be delivered at " +inputtedLocation);
        };
      });
      });

    });

  });
