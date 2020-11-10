import questions from "./questions";
import users from "./users";

export default function(server) {
  server.create("user", { email: "test@test.com" })

  let usersArray = users(server);
  questions(server, usersArray);
}
