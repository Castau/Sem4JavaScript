"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
//import * as _ from "lodash"
let numbers = [1, 2, 3];
let shuffled = lodash_1.default.shuffle(numbers);
console.log(shuffled);
//# sourceMappingURL=demo1.js.map