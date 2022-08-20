import HTTPError from './HTTPError';

export default class InternalServerError extends HTTPError {
    constructor(message = 'Internal Server Error!') {
        super(500, message);
    }
}
