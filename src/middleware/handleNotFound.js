import { NotFound } from '../errors';

export default ({ method, path }) => {
    throw new NotFound(`Not Found: ${method} - ${path}`);
};
