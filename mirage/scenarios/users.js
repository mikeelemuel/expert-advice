export default function (server) {
  let usersArray = [];
  ["mike@gmail.com", "john@doe.com", "lemuel@lemuel.com", "test@test.com"].forEach(element => {
    usersArray.push(
      server.create("user", {
        email: element
      })
    );
  });

  return usersArray;
}
