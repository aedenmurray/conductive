import HTTPError from './HTTPError';

export default class UpgradeRequired extends HTTPError {
    constructor(message = 'Upgrade Required!') {
        super(426, message);
    }
}
