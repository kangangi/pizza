function Order(name,total){
  this.name = name;
  //this.type = [];
  this.total = total;
};

function PizzaType(pizzaFlavor, size, crust){
  this.size = size;
  this.pizzaFlavor = pizzaFlavour;
  this.crust = crust;
  this.toppings = toppings;
  this.delivery = delivery;
}

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
    var inputtedLocation = $("input#location").val()
    var inputtedSize = $("input[name=size]:checked").val();
    var inputtedFlavor =$("input[name=pizza]:checked").val();
    var inputtedCrust =$("#crust").val();
    var inputtedDelivery= $("input[name=delivery]:checked").val();

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
    }
    //costing
    var sizeCost;
    var crustCost;
    var toppingCost = 0;
    var deliveryCost ;
    //size costing
    if (inputtedSize ==="small"){
      sizeCost = 500;
    } else if(inputtedSize ==="medium"){
      sizeCost = 750;
    }else{
       sizeCost = 1000;
    };
    //crust costing
    if (inputtedCrust ==="thin"){
       crustCost = 0;
    } else if(inputtedCrust === "thick"){
      crustCost = 100;
    }else if (inputtedCrust === "gluten-free"){
      crustCost = 200;
    }else {
      crustCost = 150;
    };
    //toppings costings
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
    if (inputtedDelivery ==="pick-up"){
       deliveryCost = 0;
    } else {
        deliveryCost = 200;
    };

    var total1 =  sizeCost + crustCost + toppingCost;
    var total = total1 + deliveryCost;

    //var  newOrder = new Order(inputtedName,total1);
    //alert(newOrder.inputtedName);
    //$("input#name").val(" ");
    //total = total1 + deliveryCost;
    $("#show-order"). show();
    $(".userName").text("Hey " + inputtedName + "! Your order is:");
    $(".pizza-type").text(inputtedSize + ", " + inputtedFlavor+" pizza with " + inputtedCrust +" crust");
    $(".pizza-total1").text("Your total is " + "KSH"+ total1);

    $("#checkoutbtn").click(function(){
      $("#checkout"). show();
      $(".total").text("Your total is KSH" +total);
      alert(inputtedLocation);

      if (inputtedDelivery === "delivery"){

        $("#show-location").show();
        $(".delivery-location").text("This is to be delivered at " +inputtedLocation);
      }
    });
    });




  });
