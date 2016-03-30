// TitlesView.js - Defines a backbone view class for the titles of images table.
var TitlesView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Images</th>').append(
      this.collection.map(function(puppy) {
        return new TitleEntryView({model: puppy}).render();
      })
    );
  }

});
