function isValidationRequired(arg) {
    const isTrue = arg.length > 3; 
    return isTrue;
}

function valid(arg) {
    const argumentToValidate = arg[3];
    const validArguments = ['--validate-links', '--rootdir', '--filepath'];
    const isValid = validArguments.includes(argumentToValidate);
    if(!isValid) {
        throw new Error('Invalid argument');
    }
    return isValid;
}

module.exports = { isValidationRequired, valid };
