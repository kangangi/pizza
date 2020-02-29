function Order(name, size, type){
  this.name = name;
  this.size = size;
  this.type = [];
}

function PizzaType(pizzaFlavour, crust, toppings){
  this.pizzaFlavour = pizzaFlavour;
  this.crust = crust;
  this.toppings = toppings;
}

$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedSize = $("input:radio[name=size]:checked").val();

    if (inputtedSize ==="small"){
      var sizeCost = 500;
    } else if(inputtedSize ==="medium"){
      var sizeCost = 750;
    }else{
      var sizeCost = 1000;
    }
    alert(sizeCost);
  });
});
