class ErrorHandler extends Error {
    constructor(public status: number, public message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

class NotFoundError extends ErrorHandler {
    constructor(message = 'Not Found') {
        super(404, message);
    }
}

class InternalServerError extends ErrorHandler {
    constructor(message = 'Internal Server Error') {
        super(500, message);
    }
}

export default function errorHandler(err: ErrorHandler, req: any, res: any, next: any) {
    if (err instanceof NotFoundError) {
        // Handle not found error
        res.status(err.status).send({ error: { message: err.message } });
    } else if (err instanceof InternalServerError) {
        // Handle internal server error
        res.status(err.status).send({ error: { message: err.message } });
    } else {
        // Handle general error
        res.status(err.status || 500).send({ error: { message: err.message || 'Something went wrong' } });
    }
}

export { ErrorHandler, NotFoundError, InternalServerError };