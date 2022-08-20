import HTTPError from './HTTPError';

export default class TooEarly extends HTTPError {
    constructor(message = 'Too Early!') {
        super(425, message);
    }
}
