import HTTPError from './HTTPError';

export default class RangeNotSatisfiable extends HTTPError {
    constructor(message = 'Range Not Satisfiable!') {
        super(416, message);
    }
}
