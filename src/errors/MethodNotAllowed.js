import HTTPError from './HTTPError';

export default class MethodNotAllowed extends HTTPError {
    constructor(message = 'Method Not Allowed!') {
        super(405, message);
    }
}
