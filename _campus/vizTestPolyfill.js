
function output(...args){
    console.log(...args);
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

function expect(actual){
    return {
        toEqual: (given) => {
            const result = (actual === given);
            const detail = result ? '' : `Expect to equal: Got ${given} instead of ${actual}`;
            logResult(lastTestName, result ? 'PASS' : 'FAIL', detail);
        },
        toBeVaguelyEqual: (given) => {
            const result = (actual == given);
            const detail = result ? '' : `Expect to vaguely equal: Got ${given} instead of ${actual}`;
            logResult(lastTestName, result ? 'PASS' : 'FAIL', detail);
        }
    }
}