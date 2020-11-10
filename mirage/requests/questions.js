import pagination from "./pagination";

export default function (context) {
  context.get("/questions/:id");
  context.get("/questions/", function (schema, request) {
    return pagination(schema, request, this, "question");
  });
  context.post("/questions");
  context.delete("/questions/:id");
  context.patch("/questions/:id");
}
