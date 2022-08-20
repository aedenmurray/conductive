import HTTPError from './HTTPError';

export default class ImATeapot extends HTTPError {
    constructor(message = `I'm A Teapot!`) {
        super(418, message);
    }
}
