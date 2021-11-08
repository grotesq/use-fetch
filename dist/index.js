"use strict";
exports.__esModule = true;
exports.prefetch = exports.fetcher = void 0;
var axios_1 = require("axios");
var swr_1 = require("swr");
function fetcher(url) {
    return axios_1["default"].get(url).then(function (response) { return response.data; });
}
exports.fetcher = fetcher;
function prefetch(url) {
    return (0, swr_1.mutate)(url, fetcher(url));
}
exports.prefetch = prefetch;
function useFetch(url) {
    return (0, swr_1["default"])(url, fetcher);
}
exports["default"] = useFetch;
//# sourceMappingURL=index.js.map