import HTTPError from './HTTPError';

export default class ExpectationFailed extends HTTPError {
    constructor(message = 'Expectation Failed!') {
        super(417, message);
    }
}
