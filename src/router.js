import { Router } from 'express';
import { validateRequest } from './middleware';

export default (wrappedFunction) => {
    const router = Router();

    const route = (config) => {
        const { path, handler } = config;
        const middleware = config.middleware ?? [];
        const method = config.method.toLowerCase();
        const schema = config.schema;

        // TODO: Validate config.

        if (schema) {
            middleware.unshift(validateRequest(schema));
        }

        middleware.forEach((fn) => {
            router[method](path, (request, response, next) => {
                Promise.resolve(fn(request, response, next))
                    .then(next)
                    .catch(next);
            });
        });

        router[method](path, (request, response, next) => {
            Promise.resolve(handler(request, response, next))
                .then((responseData = {}) => {
                    return !response.headersSent
                        ? response.json(responseData)
                        : next();
                })
                .catch(next);
        });
    };

    wrappedFunction(route);
    return router;
};
