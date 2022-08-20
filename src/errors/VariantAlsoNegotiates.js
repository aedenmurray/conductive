import HTTPError from './HTTPError';

export default class VariantAlsoNegotiates extends HTTPError {
    constructor(message = 'Variant Also Negotiates!') {
        super(506, message);
    }
}
