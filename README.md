# :zap: `conductive`

## _Pseudo Express.js framework for quickly & easily building RESTful APIs._

The Conductive framework is a collection of helpful components used for building APIs on top of Express.js.

These components are aimed to help maintain readability and reduce complexity across various applications.

What is a _component_? In this context, a _component_ just means a bit of code, such as a function or class.

## Installation

```
npm install --save conductive
```

## Router

The Router is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) used for describing API routes & their functions.

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
