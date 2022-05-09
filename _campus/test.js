describe('Output should contain 100 elements', ()=>{
	expect(answerArr.length).to.equal(100);
});

describe('The 6th item should be Fizz', ()=>{
	expect(answerArr[5]).to.equal('Fizz');
});

describe('The 50th item should be Buzz', ()=>{
	expect(answerArr[49]).to.equal('Buzz');
});

describe('The 90th item should be FizzBuzz', ()=>{
	expect(answerArr[89]).to.equal('FizzBuzz');
});

describe('The 98th item should be 98', ()=>{
	expect(answerArr[97]).to.be.oneOf(['98', 98]);
});
