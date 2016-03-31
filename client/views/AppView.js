// AppView.js - Defines a backbone view class for the whole photo album app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.titlesView = new TitlesView({collection: this.model.get('imageTitles')});
    this.imageView = new ImageView({model: this.model.get('currentImage')});

    this.model.on('change:currentImage', function(model) {
      this.imageView.setImage(model.get('currentImage'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.titlesView.$el,
      this.imageView.$el
    ]);
  }

});
