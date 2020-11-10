import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route("login");
  this.route("signup");
  this.route("index", { path: "" }, function () {});

  this.route("posts", function () {
    this.route("edit", { path: ":id" });
    this.route("new");
    this.route("answer", {
      path: ":question_id/answers"
    });
  });
});

export default Router;
