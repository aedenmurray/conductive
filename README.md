# :zap: `conductive`

## _Pseudo Express.js framework for quickly & easily building RESTful APIs._

The Conductive framework is a collection of helpful components used for building APIs on top of Express.js.

These components are aimed to help maintain readability and reduce complexity across various applications.

## Installation

```
npm install --save conductive
```

## Router

The [Router](https://github.com/aedenmurray/conductive/blob/main/src/router.js) is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) used for describing API routes & their functions.

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

Conductive comes bundled with a useful set of errors to help improve code readability.

These errors all extend the [HTTPError](https://github.com/aedenmurray/conductive/blob/main/src/errors/HTTPError.js) class, which in turn extends the standard Javascript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) class.

You can find the full list of included errors [here](https://github.com/aedenmurray/conductive/tree/main/src/errors).

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
