# Anagram

JavaScript starter code for the 'Anagram' assignment

## Task
- Open the file called `anagram-checker.js`
- Create a function called `checkAnagram` that takes in 2 parameters; the source text, and the anagram text
- The function should return true if they are anagrams (same length and same letters) and return false if not
- If the two words are the same, they should not be considered anagrams
- The function should return a boolean value as soon as possible

### Test Notes
- If you want to test the code for yourself before submitting, paste your code into the ScratchPad (https://dash.projectfunction.io/scratchpad), followed by:
    ```javascript
    // Your code before this

    function runTests(inp,out,answer){
        if (checkAnagram(inp,out) === answer) console.log("SUCCESS: " + inp + " => " + out);
        else console.log("FAILED: " + inp + " isn't an anagram for " + out);
    }
    runTests('listen','silent', true);
    runTests('radium','madrid', false);
    runTests('eleven plus two','twelve plus one', true);
    runTests('funeral','real fun', true);
    runTests('spain','spain', false);
    ```
- An automatic test will be run against your submission, so make sure your function is named `checkAnagram` and that your code is in the `anagram-checker.js` file


### Submission Notes
Once you have completed the task, simply push your changes back to the repository for this assignment. After the submission deadline, only the latest push will be considered.