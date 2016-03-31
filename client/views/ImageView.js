// ImageView.js - Defines a backbone view class for the image display.
var ImageView = Backbone.View.extend({

  tagName: 'div',

  template: _.template(
    '<div class="currentImage"><tr><td><img src="<%=url%>"></td></tr>\
     <div id="ratingOptions">\
     <tr></td><td><%=title%></td></tr>\
     <td>Rating: <%=rating%> of 5</td></tr>\
     <tr><td>\
        <select>\
          <option value="0">Change rating:</option>\
          <option value="0">0</option>\
          <option value="1">1</option>\
          <option value="2">2</option>\
          <option value="3">3</option>\
          <option value="4">4</option>\
          <option value="5">5</option>\
        </select>\
       </div>\
     </td></tr></div>'),

  initialize: function() {
    this.render();
  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  events: {
    'change #ratingOptions': 'handleChange'
  },

  handleChange: function(e) {
    var newRating = e.target.value;
    this.model.changeRating(newRating);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
