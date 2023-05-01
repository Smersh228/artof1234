"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeCoordinates = exports.respawnCoordinates = void 0;
var respawnCoordinates = function (row, col) {
    var type = col % 2 ? 1 : 2;
    var line = type === 1 ? 1 + (12.5 * (row - 1)) : 6.5 + (12.9 * (row - 1));
    var column = 1 + (7.2 * (col - 1));
    var newCoordinates = { top: line, left: column, col: col, row: row, type: type };
    return newCoordinates;
};
exports.respawnCoordinates = respawnCoordinates;
var changeCoordinates = function (_a) {
    var cell = _a.cell, col = _a.col;
    var row = col.type === 1 ? 1 + (12.8 * (cell.row - 1)) : 6.5 + (12.7 * (cell.row - 1));
    var column = 1 + (6.9 * (cell.col - 1));
    var newCoordinates = { top: row, left: column, col: cell.col, row: cell.row, type: col.type };
    return newCoordinates;
};
exports.changeCoordinates = changeCoordinates;
//# sourceMappingURL=changeCoordinates.js.map