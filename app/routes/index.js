import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";

export default class IndexRoute extends Route {
  @service session;
  queryParams = {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    keyword: {
      refreshModel: true
    }
  };

  beforeModel() {
    return this.session.loadUser();
  }

  async model(params) {
    return this.store
      .query("question", {
        filter: {
          keywords: params.keyword
        },
        include: "user",
        page: {
          number: params.page,
          size: params.size
        }
      })
      .then(results => {
        return {
          data: results,
          meta: results.meta
        };
      });
  }

  setupController(controller, model) {
    controller.set("questions", model.data);
    controller.set("meta", model.meta);
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      set(controller, "page", 1);
      set(controller, "size", 7);
      set(controller, "keyword", undefined);
    }
  }
}
