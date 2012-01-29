

var createScope = function (opts) {
    opts = opts || {};
    return function (bundle) {
        bundle.register("post", function (src) {
            if (opts.inject)
                src += ";" + opts.inject + ";";
            if (opts.require)
                src += ";require(" + opts.require + ");";
            return ";(function(){" + src + "}).call(this);";
        });
    };
};

// exports

module.exports = createScope();
module.exports.createScope = createScope;

