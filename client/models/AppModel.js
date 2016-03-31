// App.js - Defines a backbone model class for the whole photo album app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentImage', new PuppyModel());

    params.imageTitles.on('display', function(image) {
      this.set('currentImage', image);
    }, this);
  }

});
