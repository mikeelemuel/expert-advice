import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class PostsNewController extends Controller {
  @tracked titleError;
  @tracked tagsError;
  @tracked errors = [];
  @tracked tagList;

  @action
  createQuestion() {
    this.resetState();
    this.errors = [];
    let safeToPostQuestion = true;

    if (!this.model.title) {
      this.titleError = true;
      this.errors.push("Title must be present");
      safeToPostQuestion = false;
    }

    if (!this.tagList) {
      this.tagsError = true;
      this.errors.push("Tags must be present");
      safeToPostQuestion = false;
    }

    if (safeToPostQuestion) {
      let slug = this.model.title.split(' ').join('-');
      let tags = this.tagList.split(',');
      this.model.slug = slug;
      this.model.tags = [...tags];
      this.model.save()
      .then(() => {
        this.tagList = null;
        this.transitionToRoute('index')
      });
    }
  }

  resetState() {
    this.titleError = false;
    this.tagsError = false;
  }
}
