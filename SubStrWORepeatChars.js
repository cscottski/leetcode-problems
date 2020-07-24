/**
 * @param {string} s
 * @return {number}
 */

// I - a string
// O - a number, the length of a substring with non-repeating chars
// C - none
// E - empty string
var lengthOfLongestSubstring = function(s) {
    // set array for results
    var results = [];
    // if string is empty, return 0
    if (s.length === 0) {
        return 0;
    }
    
    // recursively check for individual chars in a string
    function individCharsInStr (str) {
    // console.log(`teststring is ${str}`);
    // if string length === 0, return 0
        if (str.length === 0) {
            return 0;
    // else if string length === 1, return 1
        } else if (str.length === 1) {
            return 1;
    // else
        } else {
        // set var for firstChar
            var firstChar = str[0];
        // set var to restOfStr
            var restOfStr = str.slice(1);
        // set var to index of first occurence of firstChar in restOfStr
            var repeatInd = restOfStr.indexOf(firstChar);
        // if repeatInd = -1
            // return 1 + individCharsInStr(restOfStr)
            // console.log(`char is ${firstChar} and string is ${restOfStr}`);
            // console.log(`repeatInd is ${repeatInd}`);
            if (repeatInd === -1) {
                return 1 + individCharsInStr(restOfStr);
            } else {
        // else
                return 1 + individCharsInStr(restOfStr.slice(0, repeatInd));
            }
        }
    }

    // for loop to iterate through string
    for (let i = 0; i < s.length; i++) {
        // if we are looking at the last char of the string, results[i] = 1;
        if (i === s.length - 1) {
            results[i] = 1;
        } else {
            // console.log(`testing string ${s.slice(i)}`);
            results[i] = individCharsInStr(s.slice(i));
        }
    }

    // console.log(results);
    // set var longestSubstr = results[0]
    var longestSubstr = results[0];
    // find largest value in results array
    // iterate through results
    for (let j = 0; j < results.length; j++) {
      // if results[j] > longestSubstr then longestSubstr = results[j]
        if (results[j] > longestSubstr) {
            longestSubstr = results[j];
        }
    }
    // return longestSubstr
    return longestSubstr;
};