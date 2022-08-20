import HTTPError from './HTTPError';

export default class PreconditionRequired extends HTTPError {
    constructor(message = 'Precondition Required!') {
        super(428, message);
    }
}
