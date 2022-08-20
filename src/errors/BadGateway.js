import HTTPError from './HTTPError';

export default class BadGateway extends HTTPError {
    constructor(message = 'Bad Gateway!') {
        super(502, message);
    }
}
