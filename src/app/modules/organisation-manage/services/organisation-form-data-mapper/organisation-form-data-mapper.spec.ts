import { OrganisationFormDataMapper } from './organisation-form-data-mapper';

describe('modules/organisation-manage/OrganisationFormDataMapper', () => {

    it('should be created', () => {
        const mapper: OrganisationFormDataMapper = new OrganisationFormDataMapper();
        expect(mapper).toBeTruthy();
    });

    describe(':toFormData', () => {
        let mapper: OrganisationFormDataMapper;
        const examples: Array<any> = [
            {
                entity: {
                    id: 123,
                    label: 'asdfgh',
                    description: 'dfff',
                },
                defaultFormData: {},
                formFields: ['id', 'label'],
                expectedFormData: {
                    label: 'asdfgh',
                    id: 123,
                },
            },
        ];

        beforeEach(() => {
            mapper = new OrganisationFormDataMapper();
        });

        examples.forEach(({ entity, formFields, defaultFormData, expectedFormData }, index: number) => {
            it('#Example' + index, () => {
                const formData: any = mapper.toFormData(entity, formFields, defaultFormData);
                expect(formData).toEqual(expectedFormData);
            });
        });
    });

    describe(':toEntityData', () => {
        let mapper: OrganisationFormDataMapper;
        const examples: Array<any> = [
            {
                formData: {
                    label: 'asdfgh',
                    id: 123,
                },
                expectedEntityData: {
                    label: 'asdfgh',
                    id: 123,
                },
            },
        ];

        beforeEach(() => {
            mapper = new OrganisationFormDataMapper();
        });

        examples.forEach(({ formData, expectedEntityData }, index: number) => {
            it('#Example' + index, () => {
                const entityData: any = mapper.toEntityData(formData);
                expect(entityData).toEqual(expectedEntityData);
            });
        });
    });
});
