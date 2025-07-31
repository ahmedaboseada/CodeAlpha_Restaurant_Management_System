class ResponseWrapper {
    constructor() {}

    static success(data, message = 'Success') {
        return {
            success: true,
            message,
            data
        };
    }

    static error(error) {
        return {
            success: false,
            message: error.message || 'An error occurred',
            data: error.data || null,
            error: error
        };
    }
}

module.exports = ResponseWrapper;