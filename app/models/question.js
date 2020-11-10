import Model, { belongsTo, attr } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr() title;
  @attr() description;
  @attr() views;
  @attr() tags;
  @attr() slug;
  @belongsTo("user") user;
}
