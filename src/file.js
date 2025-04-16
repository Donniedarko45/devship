"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var getAllFiles = function (folderPath) {
    var files = [];
    var excludeFiles = ['.git', '.gitignore', 'README.md'];
    var getFiles = function (folderPath) {
        var entries = fs_1.default.readdirSync(folderPath);
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            var fullPath = path_1.default.join(folderPath, entry);
            // Skip excluded files
            if (excludeFiles.includes(entry))
                continue;
            try {
                var stat = fs_1.default.lstatSync(fullPath);
                if (stat.isDirectory()) {
                    getFiles(fullPath);
                }
                else if (stat.isFile() && !stat.isSymbolicLink()) {
                    files.push(fullPath);
                }
            }
            catch (error) {
                // Skip inaccessible files
                continue;
            }
        }
    };
    getFiles(folderPath);
    return files;
};
exports.getAllFiles = getAllFiles;
