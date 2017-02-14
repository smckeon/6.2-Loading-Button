var $ = require('jquery');

var PizzaList = require('./models/models.js').PizzaList;
// var Pizza = require('./models/models.js').Pizza;
// var models = require('./models/models.js');

var myPizza = new PizzaList();

// $('.submit-button').text('Submit');
// $('.submit-button').on('change:')

$('.submit-button').on('click', function(){
    myPizza.fetch();

    myPizza.on('request', function(){
    $('.submit-button').text('Loading...');
  });

    myPizza.on('sync', function(){
    $('.submit-button').text('Submit');
  });
});

// once JSON or Data is being acknowledged and begun to be populated,
// we need the button to switch to loading

// going to need an event listener for the click to change text from submit to Loading...
// once info is loaded, switch text back to submit.


// .fetch has an ajax request within it and can create new models
