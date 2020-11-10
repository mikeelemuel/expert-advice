import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | question-form", function (hooks) {
  setupRenderingTest(hooks);

  test("it has input and button elements", async function (assert) {
    this.set("updateQuestion", function () {});

    await render(hbs`<QuestionForm @updateQuestion={{updateQuestion}} />`);

    assert.dom("[data-test-input-title]").exists();
    assert.dom("[data-test-input-tags]").exists();
    assert.dom("[data-test-ask-question-button]").exists();
  });
});
