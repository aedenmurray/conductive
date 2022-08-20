import HTTPError from './HTTPError';

export default class RequestTimeout extends HTTPError {
    constructor(message = 'Request Timeout!') {
        super(408, message);
    }
}
