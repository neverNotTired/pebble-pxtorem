var _ = require('lodash');
var { getOptions } = require('loader-utils');

module.exports = function (source) {
    //make sure the loader is cacheable
    if (_.isUndefined(this.cacheable)) return source;
    this.cacheable();
    
    //get options from the loader config
    var options     = getOptions(this) || {},
        basePx      = !_.isUndefined(options.basePx) ? options.basePx : 10,
        min         = !_.isUndefined(options.min) ? options.min : 0,
        floatWidth  = !_.isUndefined(options.floatWidth) ? options.floatWidth : 3,
        matchPXExp  = /\b\d+(\.\d+)?px\b/g;

    //replace the px value with rem value
    return source.replace(matchPXExp, function (match) {
        var pxValue = parseFloat(match.slice(0, match.length - 2));
        if (pxValue <= min) return match;
        var remValue = pxValue / basePx;
        if (pxValue % basePx !== 0) {
            remValue = parseFloat((pxValue / basePx).toFixed(floatWidth));
        }
        return remValue + 'rem';
    });
};
