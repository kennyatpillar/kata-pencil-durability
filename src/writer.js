var writings = ''

exports.clearWritings = function() {
    writings = ''
}

exports.getWritings = function() {
    return writings
}

exports.writeSomething = function(newWritings) {
    writings = writings + newWritings
    return writings
}