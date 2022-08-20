import HTTPError from './HTTPError';

export default class LoopDetected extends HTTPError {
    constructor(message = 'Loop Detected!') {
        super(508, message);
    }
}
