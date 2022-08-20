import HTTPError from './HTTPError';

export default class RequestHeaderFieldsTooLarge extends HTTPError {
    constructor(message = 'Request Header Fields Too Large!') {
        super(431, message);
    }
}
