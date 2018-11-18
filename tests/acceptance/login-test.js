import { module, test } from 'qunit';
import { click, fillIn, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login test', function(hooks) {
  setupApplicationTest(hooks);


  test('visiting /login-test', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/login');

    await fillIn('[data-test-login] > md-input-container:first-child > input', 'test');
    await fillIn('[data-test-login] > md-input-container:nth-child(2) > input', 'test');
    await click('[data-test-login] > button');

    assert.equal(currentURL(), '/');
  });
});
