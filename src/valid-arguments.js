function isValidationRequired(arg) {
    const isTrue = arg.length > 2; 
    return isTrue;
}

function valid(argumentToValidate) {
    const validArguments = ['--rootdir', '--filepath'];
    const isValid = validArguments.includes(argumentToValidate);
    if(!isValid) {
        throw new Error('Invalid argument');
    }
    return isValid;
}

module.exports = { isValidationRequired, valid };
