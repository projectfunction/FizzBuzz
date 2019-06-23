
// More Information about this assisngment is available in the README.md file

let answerArr = [];
let oldConsoleLog = console.log;
console.log = (...args)=>{
	oldConsoleLog.call(this,...args);
	answerArr.push(args);
};

// WRITE YOUR PROGRAM BELOW
