import HTTPError from './HTTPError';

export default class ServiceUnavailable extends HTTPError {
    constructor(message = 'Service Unavailable!') {
        super(503, message);
    }
}
