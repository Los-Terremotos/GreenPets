"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processParams = void 0;
function processParams(inputNumber, inputString) {
    const numToString = {
        1: "none",
        2: "minimum",
        3: "average",
        4: "frequent",
    };
    const wateringParam = numToString[inputNumber];
    let indoorParam;
    if (inputString === "indoor" || inputString === "Indoor") {
        indoorParam = 1;
    }
    else if (inputString === "outdoor" || inputString === "Outdoor") {
        indoorParam = 0;
    }
    return {
        wateringParam,
        indoorParam,
    };
}
exports.processParams = processParams;
