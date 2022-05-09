import { fetchUser } from './jest-fn-mocking';

describe('jest.fn mocking', () => {
    // Dummy example
    it('create a callable function', () => {
        const mock = jest.fn();
        mock('Nicode');
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenLastCalledWith('Nicode');
        expect(mock).toHaveBeenCalledTimes(1);
    });

    // Mock implementation
    it('mock implementation', () => {
        const fakeAdd = jest.fn().mockImplementation((a, b) => 5);

        expect(fakeAdd(1, 1)).toBe(5);
        expect(fakeAdd).toHaveBeenLastCalledWith(1, 1);
    });

    // API call mocking
    const user = { name: 'Nicode' };
    it('mock fetch', () => {
        // Create mocking of fetch
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ user }));
        const process = jest.fn;
        // On original function call
        fetchUser(111, process).then(x => console.log(x));
        // Do mocking
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/users/111');
    });
});
