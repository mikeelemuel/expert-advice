export default function (schema, request, context, resource) {
  let page = parseInt(request.queryParams["page[number]"]);
  let size = parseInt(request.queryParams["page[size]"]);

  if (!page && !size) {
    if (resource === "question") {
      return schema.questions.all();
    }
  }

  let resources = [];
  if (resource === "question") {
    if (request.queryParams["filter[keywords]"] != null) {
      resources = schema.questions.where(
        question =>
          question.title.toLowerCase().indexOf(request.queryParams["filter[keywords]"]) > -1 ||
          question.tags.join().toLowerCase().indexOf(request.queryParams["filter[keywords]"]) > -1
      );
    } else {
      resources = schema.questions.all();
    }
  }
  let slice = resources.slice((page - 1) * size, (page - 1) * size + size);

  let response = context.serializerOrRegistry.serialize(slice, request);

  response.meta = {
    total: resources.length,
    totalPages: totalPages(resources.length, size)
  };

  return response;
}

function totalPages(length, size) {
  let sum = length / size;
  if (sum % 1 !== 0) {
    sum = sum + 1;
  }
  return parseInt(sum);
}
