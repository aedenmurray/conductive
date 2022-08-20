import HTTPError from './HTTPError';

export default class NotExtended extends HTTPError {
    constructor(message = 'Not Extended!') {
        super(510, message);
    }
}
