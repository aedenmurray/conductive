import HTTPError from './HTTPError';

export default class MisdirectedRequest extends HTTPError {
    constructor(message = 'Misdirected Request!') {
        super(421, message);
    }
}
