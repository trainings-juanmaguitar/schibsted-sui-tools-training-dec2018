'use strict';

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var callback = this.async();
    var value = source.toString();
    if (/module\.exports\s*=\s*require\s*\(/.test(value)) {
        value = this.exec(source, this.resource).toString();
    }
    callback(null, 'module.exports = ' + JSON.stringify(value) + ';');
};
