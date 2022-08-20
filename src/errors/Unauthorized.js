import HTTPError from './HTTPError';

export default class Unauthorized extends HTTPError {
    constructor(message = 'Unauthorized!') {
        super(401, message);
    }
}
