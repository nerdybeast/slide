import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulma/bulma-card-header', 'Integration | Component | bulma/bulma card header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bulma/bulma-card-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulma/bulma-card-header}}
      template block text
    {{/bulma/bulma-card-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
