function Order(name, size, type){
  this.name = name;
  this.size = size;
  this.type = [];
}

function PizzaType(pizzaFlavor, crust, toppings){
  this.pizzaFlavor = pizzaFlavour;
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

    var inputtedFlavor =$("input:radio[name=pizza]:checked").val();
    var inputtedCrust =$("#crust").val();

    if (inputtedCrust ==="0"){
      var crustCost = 0;
    } else if(inputtedCrust === "1"){
      var crustCost = 100;
    }else if (inputtedCrust === "2"){
      var crustCost = 200;
    }else {
      var crustCost = 150;
    }
    alert(crustCost)

    if (document.getElementById("bacon").checked){
      var bacon = 100;
    } else if (document.getElementById("peporoni").checked){
      var peporoni = 120;
    } else if (document.getElementById("cheese").checked){
      var cheese = 80;
    } else if (document.getElementById("onions").checked){
      var onions = 50;
    } else {
      var topping = 0;
    }

  });
});
