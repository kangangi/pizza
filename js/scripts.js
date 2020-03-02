function Order(name,type,total){
  this.name = name;
  this.type = [];
  this.total = total;
}

function PizzaType(pizzaFlavor, size, crust){
  this.size = size;
  this.pizzaFlavor = pizzaFlavour;
  this.crust = crust;
  this.toppings = toppings;
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
    var inputtedSize = $("input[name=size]:checked").val();
    var inputtedFlavor =$("input[name=pizza]:checked").val();
    var inputtedCrust =$("#crust").val();

    var sizeCost;
    var crustCost;
    var toppingCost = 0;



    if (inputtedSize ==="small"){
      sizeCost = 500;
    } else if(inputtedSize ==="medium"){
      sizeCost = 750;
    }else{
       sizeCost = 1000;
    };

    if (inputtedCrust ==="0"){
       crustCost = 0;
    } else if(inputtedCrust === "1"){
      crustCost = 100;
    }else if (inputtedCrust === "2"){
      crustCost = 200;
    }else {
      crustCost = 150;
    };

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

    var total =  sizeCost + crustCost + toppingCost;
    alert(sizeCost);
    alert(crustCost);
    alert(toppingCost);
    alert(total);
  });
});




    /*if (bacon === true) {
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
