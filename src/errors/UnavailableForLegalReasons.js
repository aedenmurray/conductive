import HTTPError from './HTTPError';

export default class UnavailableForLegalReasons extends HTTPError {
    constructor(message = 'Unavailable For Legal Reasons!') {
        super(451, message);
    }
}
