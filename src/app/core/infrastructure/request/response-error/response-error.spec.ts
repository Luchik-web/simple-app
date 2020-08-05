import { ResponseError } from './response-error';

describe('ErrorPayload', () => {

    describe(':create instance', () => {

        it('should create an instance', () => {
            expect(new ResponseError('Error')).toBeTruthy();
        });

        it('check fields', () => {
            const expectedMessage: string = 'Test Error';
            const expectedStatus: number = 404;
            const expectedStatusText: string = 'Some status';
            const error: ResponseError = new ResponseError(expectedMessage, expectedStatus, expectedStatusText);

            expect(error.name).toEqual('ResponseError');
            expect(error.message).toEqual(expectedMessage);
            expect(error.status).toEqual(expectedStatus);
            expect(error.statusText).toEqual(expectedStatusText);
            expect(error.errors.length).toEqual(1);
            expect(error.errors[0]).toEqual(expectedMessage);
        });
    });

});
