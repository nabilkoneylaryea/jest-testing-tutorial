const { expect, beforeEach, beforeAll } = require('@jest/globals');
const axios = require('axios');
const { describe } = require('yargs');
const functions = require('./functions');

// create functions that you'd want to run before and after each test or before and after the testing suite
const initDatabase = () => console.log('Database Initialized ...');
const closeDatabase = () => console.log('Database Closed ...');
const nameCheck = () => console.log('Checking name...');

// runs functions before and after each test
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

// runs each function once before the testing suite and one time after
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

// targets the tests within this block
describe('Checking names', () => {
    beforeEach(() => nameCheck()); // runs the name check function before each test

    test('User is jeff', () => {
        const user = 'jeff';
        expect(user).toBe('jeff');
    });

    test('User is karen', () => {
        const user = 'karen';
        expect(user).toBe('karen');
    });
});

// Testing arithmetic functions using toBe
test('Adding 2+2 to get 4', () => {
    expect(
        functions.add(2, 2)
    ).toBe(4);
});
test('Subtracting 2-2 to get 0', () => {
    expect(
        functions.sub(2, 2)
    ).toBe(0);
});

// Testing returnObject() function using toEqual'
const obj = {
    prop: 3
};
test('Making sure the correct object is returned', () => {
    expect(
        functions.returnObject()
    ).toEqual(obj);
});
test('This test should fail using toBe', () => {
    expect(
        functions.returnObject()
    ).toBe(obj);
});
test('This test should pass using not.toBe', () => {
    expect(
        functions.returnObject()
    ).not.toBe(obj);
});

// Less than and equal than: toBeLessThanOrEqual
test('Testing 2 is less than 3', () => {
    expect(2).toBeLessThan(3);
});
test('Testing 3 is less than or equal to 3', () => {
    expect(3).toBeLessThan(3);
});

// Match regular expression: toMatch
test('S should not be in UF', () => {
    expect('UF').not.toMatch(/S/);
});

// Ensure a value exists in an array: toContain
test('The fibbonaci sequence should not contain 3', () => {
    expect([1,1,2,6,24]).not.toContain(3);
});

// Working with async data (promise)
test('User name should be Leanne Graham', () => {
    expect.assertions(1); // used when testing asynchronous code to make sure statements in a promise resolve
    
    // need this line here to ensure that the promise is resolved before returning
    return functions.fetchUser().then(data => expect(data.name).toEqual('Leanne Graham'))
})

// Working with async data (async/await)
test('User name should be Leanne Graham', async() => {
    expect.assertions(1); // used when testing asynchronous code to make sure statements in a promise resolve
    
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})