# :zap: `conductive`

## _Pseudo Express.js framework for quickly & easily building RESTful APIs._

The Conductive framework is a collection of helpful components used for building APIs on top of Express.js.

These components are aimed to help maintain readability and reduce complexity across various applications.

## Installation

```
npm install --save conductive
```

## Router

The [`router`](src/router.js) is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) used for describing API routes & their functions.

It accepts a function as an argument, and passes the `route()` function back as a parameter.

You can find the full API documentation [here](https://example.com).

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

app.use("/auth", authRouter)
app.listen(1337)
```

## Errors

Conductive comes bundled with a useful set of error classes to help improve code readability.

These errors all extend the [`HTTPError`](/src/errors/HTTPError.js) class, which in turn extends the standard Javascript [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) class.

You can find the full list of included errors [here](/src/errors).

```javascript
import { Unauthorized } from "conductive/errors"

export default async (request, response) => {
  throw new Unauthorized()
}
```

### Error Messages

The included error messages are designed to be as generic as possible.

You can pass in your own message via the `constructor()`.

```javascript
import { Unauthorized } from "conductive/errors"

export default async (request, response) => {
  throw new Unauthorized("Invalid credentials!")
}
```

### Error Handling

There are 2 middleware functions that are designed to help with error handling:

- [`handleNotFound`](src/middleware/handleNotFound.js) - Used for throwing the `NotFound` error if a route can't be found.
- [`handleErrors`](src/middleware/handleErrors.js) - Used for handling all `HTTPError` messages.

```javascript
import express from "express"
import { router } from "conductive"
import { handleNotFound, handleErrors } from "conductive/middleware"
import { Unauthorized } from "conductive/errors"

const exampleRouter = router((route) => {
  route({
    path: "/unauthorized",
    method: "GET",
    handler: async (request, response) => {
      throw new Unauthorized()
    },
  })

  route({
    path: "/bug",
    method: "GET",
    handler: async (request, response) => {
      throw new Error()
    },
  })
})

app.use(exampleRouter)
app.use(handleNotFound)
app.use(handleErrors)

app.listen(1337)
```

```bash
$ curl localhost:1337/unauthorized
{ "error": "Unauthorized!" }
```

```bash
$ curl localhost:1337/bug
{ "error": "Internal Server Error!" }
```

```bash
$ curl localhost:1337/abc123
{ "error": "Not Found: GET - /abc123" }
```

_If an error is thrown that is **not** an instance of `HTTPError`, an `InternalServerError` will be thrown instead._

_This is to negate the **[Improper Error Handling](https://owasp.org/www-community/Improper_Error_Handling)** vulnerability._

## Middleware

For now, Conductive includes only one other middleware function: `validateRequest()`.

You may want to use this if you are defining your own middleware that requires schema validation.

_This is the same function that is used in the [`router`](src/router.js) for `schema` validation._

```javascript
import { validateRequest } from "conductive/middleware"

const schema = {
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
}

export default async (request, response) => {
  validateRequest(schema)

  const { authorization } = request.headers
  // TODO: Implement authorization via headers.
}
```
