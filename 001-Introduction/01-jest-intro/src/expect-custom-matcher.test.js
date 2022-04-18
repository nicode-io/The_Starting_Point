describe('expect custom matcher example', () => {
    it('string contains', () => {
        const givenName = expect.stringContaining('Nicode');
        expect('Nicode').toEqual(givenName);
    });

    // Example of custom matcher
    const users = [ 'Nicode', 'Michèle', 'Jose' ];
    it('array containing', () => {
        const userSet = expect.arrayContaining([ 'Nicode', 'Jose' ]);
        expect(users).toEqual(userSet);
    });

    // Custom matcher pattern
    const user = {
        name: 'Nicode',
        address: 'Liberty Avenue, Belgium',
        projects: [
            { name: 'Becode' },
            { name: 'Domintell' },
        ],
    };
    const matcher = expect.objectContaining({
        name: expect.stringContaining('Nicode'),
        projects: expect.arrayContaining([
            { name: expect.stringContaining('Becode') },
        ]),
    });
    expect(user).toEqual(matcher);
});
