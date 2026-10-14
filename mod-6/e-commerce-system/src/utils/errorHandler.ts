// 4. Error Handling Utility:
// Error Handler Module (errorHandler.ts):
// Implement a custom error class and functions to handle different types of errors gracefully.


export class NetworkError extends Error {

    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

export class DataError extends Error {

    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}

export class TaxCalculationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TaxCalculationError";
    }
}


