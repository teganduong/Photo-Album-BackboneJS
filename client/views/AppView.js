// AppView.js - Defines a backbone view class for the whole photo album app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.imageView = new ImageView({model: this.model.get('currentImage')});
    this.titlesView = new TitlesView({collection: this.model.get('imageTitles')});

    this.model.on('change:currentImage', function(model) {
      this.imageView.setImage(model.get('currentImage'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.imageView.$el,
      this.titlesView.$el
    ]);
  }

});
