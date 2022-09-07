# Router

The [`router`](/src/router.js) is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) used for describing API routes & their functions.

It accepts a function as an argument, and passes the `route()` function back as a parameter.

## Advantages:

- The return value of the `handler` is used as the response to the user _if no response has been sent_.
- You may use `async` functions for both the `handler` & `middleware` functions.
- Schema validation is built-in with the use of the `schema` option.

## API Documentation:

| Option       | Description                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `path`       | The path used for the route. (example: `/login`)                                                                              |
| `method`     | The method used for the route. (example: `get`) (case is not relevant)                                                        |
| `middleware` | An array of [middleware functions](https://expressjs.com/en/guide/writing-middleware.html) that execute _before_ the handler. |
| `schema`     | A map of request properties to [AJV](https://ajv.js.org) schemas.                                                             |
| `handler`    | The function that handles the route.                                                                                          |

## Example:

```javascript
import express from "express"
import { router } from "conductive"
import { validateToken } from "../middleware"

const authRouter = router((route) => {
  route({
    path: "/login",
    method: "POST",
    handler: async (request, response) => {
      // TODO: Implement login functionality.
    },
    schema: {
      body: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: { 
            type: "string",
            format: "email"
          },
          password: { 
            type: "string", 
          },
        },
      },
    },
  })

  route({
    path: "/logout",
    method: "POST",
    middleware: [validateToken],
    handler: async (request, response) => {
      // TODO: Implement logout functionality.
    },
  })
})

const app = express()
app.use("/auth", authRouter)
app.listen(1337)
```
