import HTTPError from './HTTPError';

export default class PreconditionFailed extends HTTPError {
    constructor(message = 'Precondition Failed!') {
        super(412, message);
    }
}
