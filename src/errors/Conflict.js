import HTTPError from './HTTPError';

export default class Conflict extends HTTPError {
    constructor(message = 'Conflict!') {
        super(409, message);
    }
}
