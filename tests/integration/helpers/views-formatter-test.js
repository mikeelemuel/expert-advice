import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | views-formatter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with k format', async function(assert) {
    this.set('inputValue', '1234');


    await render(hbs`{{views-formatter inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1.2k');
  });

  test('it renders with no k format', async function(assert) {
    this.set('inputValue', '123');


    await render(hbs`{{views-formatter inputValue}}`);

    assert.equal(this.element.textContent.trim(), '123');
  });
});
