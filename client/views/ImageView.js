// ImageView.js - Defines a backbone view class for the image display.
var ImageView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: 'div#img',

  initialize: function() {
    this.render();
  },

  setImage: function(image) {
    this.model = image;
    if (!this.model) {
      this.el.hide();
    }
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
