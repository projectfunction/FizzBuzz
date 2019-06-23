/**
 * DO NOT REMOVE THIS COMMENT
 *
 * @Target fizzbuzz.js
 */
 
describe('Output should contain 100 elements', ()=>{
	expect(answerArr.length).toEqual(100);
});

describe('The 6th item should be Fizz', ()=>{
	expect(answerArr[5]).toEqual('Fizz');
});

describe('The 50th item should be Buzz', ()=>{
	expect(answerArr[49]).toEqual('Buzz');
});

describe('The 90th item should be FizzBuzz', ()=>{
	expect(answerArr[89]).toEqual('FizzBuzz');
});

describe('The 98th item should be 98', ()=>{
	expect(answerArr[97]).toBeVaguelyEqual('98');
});
