import HTTPError from './HTTPError';

export default class Locked extends HTTPError {
    constructor(message = 'Locked!') {
        super(423, message);
    }
}
