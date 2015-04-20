$(document).ready(function(event) {

  $(document).ready(function(event) {

    var halfCardView = Backbone.View.extend({

      tagName: "article",
      className: "block-half shadow",
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

    var data = { title: "Fans React to Superman vs Batman Teaser", message: "Ben Affleck is still dissappointing"}
    var newCard = new halfCardView(data);

    var dataTwo = { title: "Ben Affleck Reacts", message: "By depositing fat check in his bank account"};
    var anotherCard = new halfCardView(dataTwo);

  });



});
