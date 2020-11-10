import Controller from '@ember/controller';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class IndexController extends Controller {
  queryParams = ["page", "size"];
  page = 1;
  size = 7;

  @service session;

  @action
  askQuestion() {
    this.transitionToRoute("posts.new");
  }

  @action
  showQuestionDetails(question) {
    this.transitionToRoute("posts.answer", question.id);
  }

  @action
  removeQuestion(question) {
    question.deleteRecord();
    question.save();
  }

  @action
  updateQuestion(question) {
    this.transitionToRoute("posts.edit", question.id);
  }
}
