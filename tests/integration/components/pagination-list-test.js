import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, find } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | pagination-list", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the correct page", async function (assert) {
    await render(hbs`
    <PaginationList
    @pageNumber=1
    @times=5 as |index name|
    >
    {{#if (eq name "...")}}
              {{name}}
            {{else}}
              <LinkTo
                @route="index"
                @query={{hash page=index}}
                class="pagination__link"
              >
                {{#if (eq name "Previous")}}
                  <span class="pagination__icon icon--prev"></span>
                {{else if (eq name "Next")}}
                  <span class="pagination__icon icon--next"></span>
                {{else}}
                  {{name}}
                {{/if}}
              </LinkTo>
            {{/if}}
    </PaginationList>
    `);
    assert.dom(".pagination").exists();
    assert.dom(".item--prev").exists();
    assert.dom(".pagination__item:first-child").exists();
    assert.equal(find(".pagination__item:nth-child(2)").textContent.trim(), "1", "Page one exists");
  });

  test("it renders the correct size", async function (assert) {
    await render(hbs`
    <PaginationList
    @pageNumber=1
    @times=5 as |index name|
    >
    {{#if (eq name "...")}}
              {{name}}
            {{else}}
              <LinkTo
                @route="index"
                @query={{hash page=index}}
                class="pagination__link"
              >
                {{#if (eq name "Previous")}}
                  <span class="pagination__icon icon--prev"></span>
                {{else if (eq name "Next")}}
                  <span class="pagination__icon icon--next"></span>
                {{else}}
                  {{name}}
                {{/if}}
              </LinkTo>
            {{/if}}
    </PaginationList>
    `);
    assert.dom(".pagination").exists();
    assert.dom(".item--prev").exists();
    assert.dom(".pagination__item:first-child").exists();
    assert.equal(find(".pagination__item:nth-child(6)").textContent.trim(), "5", "Page five exists");
  });
});
