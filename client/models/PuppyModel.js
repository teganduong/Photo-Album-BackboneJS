// PuppyModel.js - Defines a backbone model class for photos.
var PuppyModel = Backbone.Model.extend({
  defaults: {
    url: 'https://www.greenfieldpuppies.com/wp-content/plugins/gfp/images/breed_chihuahua_puppies_1281630499.jpg',
    title: 'Chihuahua Puppy',
    rating: 5
  },

  display: function() {
    this.trigger('display', this);
  }

});
