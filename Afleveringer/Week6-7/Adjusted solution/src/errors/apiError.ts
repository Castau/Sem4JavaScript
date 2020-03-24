
class ApiError extends Error {
    msg: string;
    constructor(msg: string, public errorCode: number) {
        super(msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError)
        }

        this.name = 'ApiError'
        this.errorCode = errorCode || 500;
        this.msg = msg;
    }
}
export { ApiError }