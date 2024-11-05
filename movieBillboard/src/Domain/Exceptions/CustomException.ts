

export class CustomException extends Error {
    public readonly statusCode: number;
  
    constructor(message: string, statusCode: number = 500) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
 
  // throw new CustomException('Movie not found', 404);
  