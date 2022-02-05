const { expect } = require('@jest/globals');
const reverseString = require('./reverseString');

// Test to see if a function exists
test('Reverse string function exists', () => {
    expect(reverseString).toBeDefined();
});

// Test to see if the reverse function works correctly
test('String reverses', () => {
    expect('hello').toEqual('olleh');
});

// Change one letter to uppercase to try and get a failed test
test('String reverses with one uppercase', () => {
    expect('Hello').toEqual('olleh');
});