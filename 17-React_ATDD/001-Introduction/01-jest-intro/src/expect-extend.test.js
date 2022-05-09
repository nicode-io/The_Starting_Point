import jsonpath from 'jsonpath';

// Create custom expect extension
expect.extend({
    toMatchJsonPath(received, argument) {
        const result = jsonpath.query(received, argument);

        if (result.length > 0) {
            return {
                pass: true,
                message: () => 'matched',
            };
        } else {
            return {
                pass: false,
                message: () => `expected ${ JSON.stringify(received) } to match jsonpath ${ argument }`,
            };
        }
    },
});

// Use extension in our test suite
describe('jsonpath', () => {
    it('matches jsonpath', () => {
        const user = {
            name: 'Nicode',
        };

        expect(user).toMatchJsonPath('$.name');
    });

    it('does not match jsonpath', () => {
        const user = {
            name: 'Nicode',
            address: 'Becode',
        };
    });
});
