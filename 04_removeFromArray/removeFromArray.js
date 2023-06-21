const removeFromArray = function(array, ...target) {
    return array.filter(value => !target.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
