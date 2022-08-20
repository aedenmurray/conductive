import HTTPError from './HTTPError';

export default class Gone extends HTTPError {
    constructor(message = 'Gone!') {
        super(410, message);
    }
}
