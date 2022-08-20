import HTTPError from './HTTPError';

export default class TooManyRequests extends HTTPError {
    constructor(message = 'Too Many Requests!') {
        super(429, message);
    }
}
