import HTTPError from './HTTPError';

export default class NotImplemented extends HTTPError {
    constructor(message = 'Not Implemented!') {
        super(501, message);
    }
}
