import Model, { attr }  from '@ember-data/model';

export default class AnswerModel extends Model {
  @attr() body;
}
