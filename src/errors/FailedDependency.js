import HTTPError from './HTTPError';

export default class FailedDependency extends HTTPError {
    constructor(message = 'Failed Dependency!') {
        super(424, message);
    }
}
