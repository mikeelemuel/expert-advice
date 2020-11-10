import faker from "faker";

export default function (server, usersArray) {
  let i = faker.random.number({ min: 0, max: 3 });
  let questions = [];
  [...Array(20).keys()].forEach(() => {
    questions.push(
      server.create("question", {
        user: usersArray[i]
      })
    );
  });
  return questions;
}
