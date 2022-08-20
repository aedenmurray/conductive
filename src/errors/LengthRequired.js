import HTTPError from './HTTPError';

export default class LengthRequired extends HTTPError {
    constructor(message = 'Length Required!') {
        super(411, message);
    }
}
