import HTTPError from './HTTPError';

export default class BandwidthLimitExceeded extends HTTPError {
    constructor(message = 'Bandwidth Limit Exceeded!') {
        super(509, message);
    }
}
