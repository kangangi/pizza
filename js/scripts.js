function Order(name, size, type){
  this.name = name;
  this.size = size;
  this.type = [];
}

function pizzaType(pizzaFlavour, crust, toppings){
  this.pizzaFlavour = pizzaFlavour;
  this.crust = crust;
  this.toppings = toppings;
}
