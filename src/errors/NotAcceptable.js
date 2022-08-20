import HTTPError from './HTTPError';

export default class NotAcceptable extends HTTPError {
    constructor(message = 'Not Acceptable!') {
        super(406, message);
    }
}
