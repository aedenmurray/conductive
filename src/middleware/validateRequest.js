import AJV from 'ajv';
import addFormats from 'ajv-formats';
import { BadRequest } from '../errors';

const ajv = new AJV();
addFormats(ajv);

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
