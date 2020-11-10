import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({
  title() {
    return faker.lorem.words();
  },
  description() {
    return faker.lorem.paragraphs();
  },
  views() {
    return faker.random.number();
  },
  tags() {
    return ["Python", "JavaScript", "AI"];
  },
  slug() {
    return this.title.split(' ').join('-');
  }
});
