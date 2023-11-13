"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revalidatePath = exports.revalidateTag = exports.disableDraftMode = void 0;
const navigation_1 = require("next/navigation");
const cache_1 = require("next/cache");
async function disableDraftMode(pathname) {
    console.log('disableDraftMode', pathname);
    const { draftMode } = await Promise.resolve().then(() => __importStar(require('next/headers')));
    draftMode().disable();
    (0, navigation_1.redirect)(pathname ?? `/`);
}
exports.disableDraftMode = disableDraftMode;
async function revalidateTag(tag) {
    return (0, cache_1.revalidateTag)(tag);
}
exports.revalidateTag = revalidateTag;
async function revalidatePath(path) {
    return (0, cache_1.revalidatePath)(path);
}
exports.revalidatePath = revalidatePath;
//# sourceMappingURL=actions.js.map