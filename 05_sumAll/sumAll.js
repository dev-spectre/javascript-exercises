const sumAll = function(start, end) {
    if (
        typeof start != 'number' ||
        typeof end != 'number' ||
        start < 0 || end < 0 
    ) return 'ERROR';

    //* naive solution
    // let sum = 0;
    // for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    //     sum += i;
    // }

    //* sum of arithmetic progression = (no. of terms)*(first term + last term)/2
    const sum = (Math.abs(start - end) + 1) * (start + end) / 2 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
