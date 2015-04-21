$(document).ready(function(event) {

    var halfCardView = Backbone.View.extend({

      tagName: "article",
      className: "block-half shadow",
      id: '<%= id %>',
      template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
      initialize: function(data) {
        this.render(data);
      },
      render: function(data) {
        this.$el.html(this.template(data));
        //$('body').append(this.$el);
        var row = $('.row')[1];
        $(row).append(this.$el);
      }
    });

  var thirdCardView = Backbone.View.extend({

    tagName: 'article',
    className: 'block-third shadow',
    id: '<%= id %>',
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data){
      this.render(data);
    },
    render: function (data) {
      this.$el.html(this.template(data));
      var row = $('.row')[2];
      $(row).append(this.$el);
    },
  });


  var quarterCardView = Backbone.View.extend({

    tagName: 'article',
    className: 'block-quarter shadow',
    id: '<%= id %>',
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data){
      this.render(data);
    },
    render: function (data) {
      this.$el.html(this.template(data));
      var row = $('.row')[3];
      $(row).append(this.$el);
    },
  });

//               _-_-_-_-_-_-Half Card_-_-_-_-_-_-

  var data = { id:"one", title: "Fans React to Superman vs Batman Teaser", message: "Ben Affleck is still dissappointing"};
  var newCard = new halfCardView(data);

  var dataTwo = { id: "two", title: "Ben Affleck Reacts", message: "By depositing fat check in his bank account"};
  var twoCard = new halfCardView(dataTwo);

//               _-_-_-_-_-_-Third Cards_-_-_-_-_-_-

  var dataThree = { id: "three", title: "The Third", message: "This is the Third1"};
  var threeCard = new thirdCardView(dataThree);

  var dataFour = { id: "four", title: "The third", message: "This is the third2"};
  var fourCard = new thirdCardView(dataFour);

  var dataFive = { id: "five", title: "The third", message: "This is the third3"};
  var fiveCard = new thirdCardView(dataFive);

//              _-_-_-_-_-_-Quarter Cards_-_-_-_-_-_-

  var dataSix = { id: "six", title: "Fourth", message: "This is the fourth1"};
  var sixCard = new quarterCardView(dataSix);

  var dataSeven = { id: "seven", title: "Fourth", message: "This is the fourth2"};
  var sevenCard = new quarterCardView(dataSeven);

  var dataEight = { id: "eight", title: "Fourth", message: "This is the fourth3"};
  var eightCard = new quarterCardView(dataEight);

  var dataNine = { id: "nine", title: "Fourth", message: "This is the fourth4"};
  var nineCard = new quarterCardView(dataNine);

});
