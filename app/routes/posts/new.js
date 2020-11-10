import Route from '@ember/routing/route';
import { set } from "@ember/object";
import { inject as service } from "@ember/service";

export default class PostsNewRoute extends Route {
  @service session;

  beforeModel(transition) {
    return this.session.requireAuthentication(transition, "login");
  }

  model() {
    return this.store.createRecord('question');
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      set(controller, "titleError", false);
      set(controller, "tagsError", false);
    }
  }
}
