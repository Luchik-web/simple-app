import { OrganisationEntity } from './organisation-entity';

describe('core/domain/OrganisationEntity', () => {

    describe(':create', () => {
        it('should create an instance', () => {
            expect(new OrganisationEntity()).toBeTruthy();
        });

        it('should have type Organisation', () => {
            const organisation = new OrganisationEntity();
            expect(organisation.$type).toEqual('Organisation');
        });
    });

});
