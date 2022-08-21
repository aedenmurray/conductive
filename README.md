# ⚡️ conductive

## _Pseudo Express.js framework for quickly & easily building RESTful APIs._

The Conductive framework is a collection of helpful components used for builing RESTful APIs on top of Express.js.

These components are aimed to help maintain readability and reduce complexity across various applications.

What is a _component_? In this context, a _component_ just means a bit of code, such as a function or class.

## Installation

```
npm install conductive
```

## Getting Started

### The Router

`import { router } from 'conductive';`

The Router is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) used for describing API routes & their functions.

It receives a function as an argument, and passes a special `route()` function back.

The `route()` function is used to configure the properties of a _route_.

Here is a basic example:

```javascript
import express from 'express';
import { router } from 'conductive';
import { authenticate } from './middleware';

const authRouter = router(
  (route) => {
    route({
      path: '/login',
      method: 'POST',
      handler: async (request, response) => {
        // TODO: Implement authentication.
      },
      schema: {
        body: {
          type: 'object',
          requires: ['email', 'password'],
          properties: {
            email: { type: 'string' },
            password: { type: 'string' }
          }
        }
      }
    });

    route({
      path: '/logout',
      method: 'POST',
      middleware: [authenticate],
      handler: async (request, response) => {
        // TODO: Implement logout functionality.
      }
    });
  })
);

app.use('/auth', authRouter);
app.listen(1337);

```
