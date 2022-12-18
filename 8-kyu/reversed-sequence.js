// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
    let result = [];
    for (let i = 0; i < n; i++) {
        if (n > 0) {
            result.push(n - 1 * i);
            result = result.filter((e) => e > 0);
        }
    }
    return result;
};
