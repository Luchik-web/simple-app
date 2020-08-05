import { EntityFormDataMapper } from './entity-form-data-mapper';

describe('common/ui/domain/EntityFormDataMapper', () => {

    it('should be created', () => {
        const mapper: EntityFormDataMapper = new EntityFormDataMapper();
        expect(mapper).toBeTruthy();
    });

    describe(':toFormData', () => {
        let mapper: EntityFormDataMapper;
        const examples: Array<any> = [
            {
                entity: {
                    id: 123,
                    label: 'asdfgh',
                    description: 'dfff',
                },
                defaultFormData: {},
                formFields: ['id', 'label', 'type'],
                expectedFormData: {
                    label: 'asdfgh',
                    id: 123,
                    type: ''
                },
            },
        ];

        beforeEach(() => {
            mapper = new EntityFormDataMapper();
        });

        examples.forEach(({ entity, formFields, defaultFormData, expectedFormData }, index: number) => {
            it('#Example' + index, () => {
                const formData: any = mapper.toFormData(entity, formFields, defaultFormData);
                expect(formData).toEqual(expectedFormData);
            });
        });
    });

    describe(':toEntityData', () => {
        let mapper: EntityFormDataMapper;
        const examples: Array<any> = [
            {
                formData: {
                    label: 'asdfgh',
                    id: 123,
                    type: '',
                },
                expectedEntityData: {
                    label: 'asdfgh',
                    id: 123,
                    type: ''
                },
            },
        ];

        beforeEach(() => {
            mapper = new EntityFormDataMapper();
        });

        examples.forEach(({ formData, expectedEntityData }, index: number) => {
            it('#Example' + index, () => {
                const entityData: any = mapper.toEntityData(formData);
                expect(entityData).toEqual(expectedEntityData);
            });
        });
    });
});
