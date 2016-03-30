// PuppyModel.js - Defines a backbone model class for puppies.
var PuppyModel = Backbone.Model.extend({

  click: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('click', this);
  }

});
