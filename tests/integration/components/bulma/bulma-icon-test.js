import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulma/bulma-icon', 'Integration | Component | bulma/bulma icon', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bulma/bulma-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulma/bulma-icon}}
      template block text
    {{/bulma/bulma-icon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
