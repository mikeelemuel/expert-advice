import Route from "@ember/routing/route";

export default class PostsEditRoute extends Route {
  model(params) {
    return this.store.findRecord("question", params.id);
  }
}
