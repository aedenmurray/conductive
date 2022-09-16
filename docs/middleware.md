# Middleware

## `validateRequest()`

[`validateRequest()`](/src/middleware/validateRequest.js) is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) used for validating request properties.

You may want to use this if you are defining your own middleware that requires schema validation.

It accepts a map of request properties to [AJV](https://ajv.js.org) schemas, and returns a validation function.

The [AJV](https://ajv.js.org) instance includes [`ajv-formats`](https://www.npmjs.com/package/ajv-formats)

```javascript
import { validateRequest } from "conductive/middleware"

const validateAccountHeader = validateRequest({
  headers: {
    type: "object",
    required: ["x-account-uuid"],
    properties: {
      "x-account-uuid": { 
        type: "string",
        format: "uuid"
      },
    },
  },
});

export const ensureAccountIsStillValid = async (request, response) => {
  validateAccountHeader(request)

  const accountUUID = request.headers['x-account-uuid'];
  // TODO: Stuff.
}
```