import HTTPError from './HTTPError';

export default class PayloadTooLarge extends HTTPError {
    constructor(message = 'Payload Too Large!') {
        super(413, message);
    }
}
