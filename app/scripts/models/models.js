var Backbone = require('backbone');


var Pizza = Backbone.Model.extend({
  // possibly do stuff
});

var PizzaList = Backbone.Collection.extend({
    model: Pizza,
    url: 'http://tiny-lasagna-server.herokuapp.com/collections/pizza'
});

module.exports = {
  'Pizza': Pizza,
  'PizzaList': PizzaList
}
