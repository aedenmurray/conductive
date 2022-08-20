import HTTPError from './HTTPError';

export default class HTTPVersionNotSupported extends HTTPError {
    constructor(message = 'HTTP Version Not Supported!') {
        super(505, message);
    }
}
