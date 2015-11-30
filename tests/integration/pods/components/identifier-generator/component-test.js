import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('identifier-generator', 'Integration | Component | identifier generator', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{identifier-generator}}`);

  assert.equal(this.$().text().trim(), 'Create button');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#identifier-generator}}
    {{/identifier-generator}}
  `);
});

test('click on button', function(assert) {
  var model = {id: '#1234'};
  this.set('model', model);
  this.render(hbs`
    {{identifier-generator id=model.id}}
  `);
  this.$('button').click();
  assert.notEqual(this.$('#code-form').text().trim(), "".trim());
});
