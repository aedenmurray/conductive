import HTTPError from './HTTPError';

export default class Forbidden extends HTTPError {
    constructor(message = 'Forbidden!') {
        super(403, message);
    }
}
