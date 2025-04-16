"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = generate;
var MAX_LEN = 6;
function generate() {
    var ans = "";
    var subset = "1234567890asdfghjklpoiuytrewqzxcvbnm";
    for (var i = 0; i < MAX_LEN; i++) {
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    console.log("random generator id: " + ans);
    return ans;
}
