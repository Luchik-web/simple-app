import { UserEntity } from './user-entity';

describe('core/domain/UserEntity', () => {

    describe(':create', () => {
        it('should create an instance', () => {
            expect(new UserEntity()).toBeTruthy();
        });

        it('should have type User', () => {
            const user = new UserEntity();
            expect(user.$type).toEqual('User');
        });
    });

});
