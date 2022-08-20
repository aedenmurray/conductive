import HTTPError from './HTTPError';

export default class URITooLong extends HTTPError {
    constructor(message = 'URI Too Long!') {
        super(414, message);
    }
}
