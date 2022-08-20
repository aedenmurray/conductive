import HTTPError from './HTTPError';

export default class UnprocessableEntity extends HTTPError {
    constructor(message = 'Unprocessable Entity!') {
        super(422, message);
    }
}
