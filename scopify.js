

var createScope = function (opts) {
    opts = opts || {};
    return function (bundle) {
        bundle.register("post", function (src) {
            // backwards compatibility to scopify 0.2.1
            if (opts.inject)
                src += ";" + opts.inject + ";";
            if (opts.prepend)
                src += ";" + opts.prepend + ";";
            if (opts.require)
                src += ";require('" + opts.require + "');";
            if (opts.append)
                src += ";" + opts.append + ";";
            return ";(function(){" + src + "}).call(this);";
        });
    };
};

// exports

module.exports = createScope();
module.exports.createScope = createScope;

