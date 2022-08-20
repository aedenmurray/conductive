import HTTPError from './HTTPError';

export default class NotFound extends HTTPError {
    constructor(message = 'Not Found!') {
        super(404, message);
    }
}
