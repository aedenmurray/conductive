import AJV from 'ajv';
import { BadRequest } from '../errors';

const ajv = new AJV();

/**
 * TODO: Don't loop over ever single request property.
 * Instead, only properties that are user defined.
 */

export default (schema) => {
    const compiledValidationFunctions = {};
    const requestProperties = Object.keys(schema);

    requestProperties.forEach((property) => {
        const validationFunction = ajv.compile(schema[property]);
        compiledValidationFunctions[property] = validationFunction;
    });

    return (request) => {
        requestProperties.forEach((property) => {
            const validationFunction = compiledValidationFunctions[property];
            if (!validationFunction) {
                return;
            }

            const isValid = validationFunction(request[property]);
            if (!isValid) {
                // TODO: Add error message.
                throw new BadRequest();
            }
        });
    };
};
