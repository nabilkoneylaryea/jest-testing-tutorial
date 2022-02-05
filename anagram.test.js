const { expect } = require('@jest/globals');
const anagram = require('./anagram');

test('Anagram function exists and is an actual function', () => {
    expect(typeof anagram).toEqual('function');
});

test('cinema is an anagram of iceman', () => {
    expect(anagram('cinema', 'iceman')).toBeTruthy();
});

test('Dormitory is an anagram of "dirty room @#$"', () => {
    expect(anagram('Dormitory', 'dirty room @#$')).toBeTruthy();
});

test('hello is NOT an anagram of aloha', () => {
    expect(anagram('hello', 'aloha')).toBeFalsy();
});