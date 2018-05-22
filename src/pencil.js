var paper = ''

exports.clearPaper = function() {
    paper = ''
}

exports.getPaper = function() {
    return paper
}

exports.writeSomething = function(newWritings) {
    paper = paper + newWritings
    return paper
}