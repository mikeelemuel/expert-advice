import Route from "@ember/routing/route";
import { set } from "@ember/object";
import { hash } from "rsvp";

export default class PostsAnswerRoute extends Route {
  model(params) {
    return hash({
      question: this.store.findRecord("question", params.question_id),
      answer: this.store.createRecord("answer")
    });
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      set(controller, "bodyError", false);
    }
  }
}
