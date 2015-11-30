import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import userModel from '../../../../helpers/make-user-object';

moduleForComponent('user-profile', 'Integration | Component | user profile', {
  integration: true,
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{user-profile}}`);
  checkForm.call(this, assert, 'Name: None', 'Email: None', 'User created at: None', 'Inactive');

  // Template block usage:" + EOL +

});

test('add user', function(assert) {
  const model = userModel({id: 0, name: 'Anze Matelic', email: 'amatelic93@gmail.com', created: '10.1.2015', active: true});
  this.set('model', model);
  this.render(hbs`
    {{#user-profile user=model}}
    {{/user-profile}}
  `);
  checkForm.call(this, assert, 'Name: Anze Matelic', 'Email: amatelic93@gmail.com', 'User created at: 10.1.2015', 'Active');
});

test('click button', function(assert) {
  const model = userModel({id: 0, name: 'Anze Matelic', email: 'amatelic93@gmail.com', created: '10.1.2015', active: false});
  this.set('model', model);
  this.render(hbs`
    {{#user-profile user=model}}
    {{/user-profile}}
  `);
  this.$('button').click();
  assert.equal(this.$('button').text(), 'Active');
});

function checkForm(assert, name, email, created, active) {
  assert.equal(this.$('h4').text(), 'User info:');
  assert.equal(this.$('p')[0].innerText, name);
  assert.equal(this.$('p')[1].innerText, email);
  assert.equal(this.$('p')[2].innerText, created);
  assert.equal(this.$('button').text(), active);
}
