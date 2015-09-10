var FruitMaker = function () {
  var fruit = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits(),
    getFruits: function() {
      return fruit;
    },
    addFruit(): function(addFruit) {
      fruit = addFruit.push();
    }
  }
};