import HTTPError from './HTTPError';

export default class ProxyAuthenticationRequired extends HTTPError {
    constructor(message = 'Proxy Authentication Required!') {
        super(407, message);
    }
}
