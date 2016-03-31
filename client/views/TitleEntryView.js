// TitleEntryView.js - Defines a backbone view class for the entries that will appear within the image titles view. These will be inserted using the "subview" pattern.
var TitleEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.display();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
