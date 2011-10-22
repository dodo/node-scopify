
module.exports = function (bundle) {
    bundle.register("post", function (src) {
        return ";(function(){" + src + "}).call(this);";
    });
};
