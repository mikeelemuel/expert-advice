import Model, { attr } from "@ember-data/model";

export default class User extends Model {
  @attr("string") email;
  @attr("string") password;
}
