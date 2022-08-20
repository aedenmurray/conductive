import HTTPError from './HTTPError';

export default class PaymentRequired extends HTTPError {
    constructor(message = 'Payment Required!') {
        super(402, message);
    }
}
