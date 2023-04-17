// src/services/foobar.ts
var Foobar = (param) => {
  return param.toUpperCase();
};

// src/api/handler.ts
function handler(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    foobar: Foobar("this should be uppercase")
  });
}
export {
  handler as default
};
