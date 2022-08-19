function isValidationRequired(arguments) {
    return arguments.length > 3;
}

function valid(arguments) {
    const argumentToValidate = arguments[3];
    const validArguments = ['--validate-links', '--rootdir', '--filepath'];
    const isValid = validArguments.includes(argumentToValidate);
    if(!isValid) {
        throw new Error('Invalid argument');
    }
    return isValid;
}

module.exports = { isValidationRequired, valid };
