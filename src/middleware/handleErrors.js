// prettier-ignore
import { 
    HTTPError, 
    InternalServerError 
} from '../errors';

export default (error, request, response, next) => {
    if (response.headersSent) {
        return next(error);
    }

    if (!(error instanceof HTTPError)) {
        console.error(error);
        error = new InternalServerError();
    }

    const { status, message } = error;

    // prettier-ignore
    return response
        .status(status)
        .json({ error: message })
};
