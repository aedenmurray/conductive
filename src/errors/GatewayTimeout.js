import HTTPError from './HTTPError';

export default class GatewayTimeout extends HTTPError {
    constructor(message = 'Gateway Timeout!') {
        super(504, message);
    }
}
