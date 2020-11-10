import { computed } from "@ember/object";
import Component from "@glimmer/component";

export default class PaginationList extends Component {
  @computed("args.pageNumber")
  get previousIndex() {
    const pageNumber = this.args.pageNumber;
    return pageNumber >= 2 ? pageNumber - 1 : 0;
  }

  @computed("args.{pageNumber,times}")
  get nextIndex() {
    const pageNumber = this.args.pageNumber;
    const times = this.args.times;

    return pageNumber < times ? pageNumber + 1 : 0;
  }

  @computed("args.{pageNumber,times}")
  get timesArray() {
    const pageNumber = this.args.pageNumber;
    const times = this.args.times;

    let timesArray = [];
    let start, end;

    if (times <= 7) {
      start = 1;
      end = times;
    } else {
      start = 1;
      end = 7;
    }

    for (let i = start; i <= end; i++) {
      if (times > 7 && pageNumber < 5) {
        if (i === 6) {
          timesArray.push("...");
        } else if (i === 7) {
          timesArray.push(times);
        } else {
          timesArray.push(i);
        }
      } else if (times > 7 && pageNumber > times - 3) {
        if (i === 1) {
          timesArray.push(i);
        } else if (i === 2) {
          timesArray.push("...");
        } else if (i === 3) {
          timesArray.push(times - 3);
        } else if (i === 4) {
          timesArray.push(times - 2);
        } else if (i === 5) {
          timesArray.push(times - 1);
        } else if (i === 6) {
          timesArray.push(times);
        }
      } else if (times > 7 && pageNumber >= 5) {
        if (i === 1) {
          timesArray.push(i);
        } else if (i === 2) {
          timesArray.push("...");
        } else if (i === 6) {
          timesArray.push("...");
        } else if (i === 7) {
          timesArray.push(times);
        } else if (i === 4 && pageNumber) {
          timesArray.push(pageNumber - 1);
          timesArray.push(pageNumber);
          timesArray.push(pageNumber + 1);
        }
      } else if (times <= 7) {
        timesArray.push(i);
      }
    }
    if (times === 1) {
      return [];
    } else {
      return timesArray;
    }
  }
}
