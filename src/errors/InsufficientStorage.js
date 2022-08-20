import HTTPError from './HTTPError';

export default class InsufficientStorage extends HTTPError {
    constructor(message = 'Insufficient Storage!') {
        super(507, message);
    }
}
