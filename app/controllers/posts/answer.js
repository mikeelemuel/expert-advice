import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class PostsAnswerController extends Controller {
  @tracked bodyError;
  @tracked errors = [];

  @action
  submitAnswer() {
    this.resetState();
    this.errors = [];
    let safeToPostQuestion = true;

    if (!this.model.answer.body) {
      this.bodyError = true;
      this.errors.push("Answer must be present");
      safeToPostQuestion = false;
    }

    
    if (safeToPostQuestion) {
      this.model.answer.save()
      .then(() => {
        this.transitionToRoute('index')
      });
    }
  }

  resetState() {
    this.titleError = false;
    this.tagsError = false;
  }
}
