import HTTPError from './HTTPError';

export default class UnsupportedMediaType extends HTTPError {
    constructor(message = 'Unsupported Media Type!') {
        super(415, message);
    }
}
