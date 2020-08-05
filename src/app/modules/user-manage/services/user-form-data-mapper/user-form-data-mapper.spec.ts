import { UserFormDataMapper } from './user-form-data-mapper';

describe('modules/user-manage/UserFormDataMapper', () => {

    it('should be created', () => {
        const mapper: UserFormDataMapper = new UserFormDataMapper();
        expect(mapper).toBeTruthy();
    });

    describe(':toFormData', () => {
        let mapper: UserFormDataMapper;
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
            mapper = new UserFormDataMapper();
        });

        examples.forEach(({ entity, formFields, defaultFormData, expectedFormData }, index: number) => {
            it('#Example' + index, () => {
                const formData: any = mapper.toFormData(entity, formFields, defaultFormData);
                expect(formData).toEqual(expectedFormData);
            });
        });
    });

    describe(':toEntityData', () => {
        let mapper: UserFormDataMapper;
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
            mapper = new UserFormDataMapper();
        });

        examples.forEach(({ formData, expectedEntityData }, index: number) => {
            it('#Example' + index, () => {
                const entityData: any = mapper.toEntityData(formData);
                expect(entityData).toEqual(expectedEntityData);
            });
        });
    });
});
