it('basic 3A implementation', () => {
    // Arrange / Given
    const user = Object.create({
        name: 'Nicode',
        address: 'Liberty Avenue'
    })
// Act / When
    const name = user.name;
    const address = user.address;
// Assert / Then
    expect(name).toEqual('Nicode');
    expect(address).toEqual('Liberty Avenue');
})

// Refactoring above test: split create name, create address
