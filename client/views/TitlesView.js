// TitlesView.js - Defines a backbone view class for the titles of images table.
var TitlesView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<th>Images</th>');
    this.collection.each(function(PuppyModel) {
      this.$el.append(new TitleEntryView({model: PuppyModel}).$el);
    }, this);

    return this;
  }

});
