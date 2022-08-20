import HTTPError from './HTTPError';

export default class BadRequest extends HTTPError {
    constructor(message = 'Bad Request!') {
        super(400, message);
    }
}
