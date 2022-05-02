let answerArr = [];

function output(...args){
	console.log.call(this,...args);
	answerArr.push(args[0]);

    const line = document.createElement('tr');
    line.innerHTML = `<td>${args.join(' ')}</td>`
    document.querySelector('#output').appendChild(line);
}

let lastTestName;

function describe(testName, testCb){
    lastTestName = testName;
    testCb();
}

function logResult(testName, outcome, detail) {
    const line = document.createElement('tr');
    line.innerHTML = `<td>${testName}</td><td>${outcome}</td><td>${detail}</td>`
    document.querySelector('#results').appendChild(line);
}

function expect(given){
    return {
        toEqual: (actual) => {
            const result = (actual === given);
            const detail = result ? '' : `Expect to equal: Got ${given} instead of ${actual}`;
            logResult(lastTestName, result ? 'PASS' : 'FAIL', detail);
        },
        toBeVaguelyEqual: (actual) => {
            const result = (actual == given);
            const detail = result ? '' : `Expect to vaguely equal: Got ${given} instead of ${actual}`;
            logResult(lastTestName, result ? 'PASS' : 'FAIL', detail);
        }
    }
}