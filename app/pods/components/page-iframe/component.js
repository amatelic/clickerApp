import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {

    var corCollection = this.get('cor');
    this.createIframe(function(body) {
      corCollection.forEach(cor => {
        body.append(this.createCircle(cor));
      });
    });

  },

  createIframe(callback) {
    let iframe = this.$('iframe');
    iframe.load(() => {
      let body = iframe.contents().find('body'); //get iframes body
      callback.call(this, body);
    });
  },
  /**
   * Create circle div for displaying user click on webpage
   */
  createCircle({x,y}) {
    return this.$('<div>').addClass('circle').css({top: y, left: x});
  },

});
