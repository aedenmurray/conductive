import HTTPError from './HTTPError';

export default class NetworkAuthenticationRequired extends HTTPError {
    constructor(message = 'Network Authentication Required!') {
        super(511, message);
    }
}
