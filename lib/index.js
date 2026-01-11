"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nativeInterface_1 = __importDefault(require("./internal/nativeInterface"));
var react_native_1 = require("react-native");
var DEFAULT_OPTIONS = {
    title: 'Select a Photo',
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take Photo…',
    chooseFromLibraryButtonTitle: 'Choose from Library…',
    quality: 1.0,
    allowsEditing: false,
    permissionDenied: {
        title: 'Permission denied',
        text: 'To be able to take pictures with your camera and choose images from your library.',
        reTryTitle: 're-try',
        okTitle: "I'm sure",
    },
    tintColor: 'blue',
};
var ImagePicker = /** @class */ (function () {
    function ImagePicker() {
    }
    ImagePicker.prototype.showImagePicker = function (optionsOrCallback, callback) {
        if (typeof optionsOrCallback === 'function') {
            return nativeInterface_1.default.showImagePicker(__assign(__assign({}, DEFAULT_OPTIONS), { tintColor: (0, react_native_1.processColor)(DEFAULT_OPTIONS.tintColor) }), optionsOrCallback);
        }
        if (callback == null) {
            throw new Error('callback cannot be undefined');
        }
        return nativeInterface_1.default.showImagePicker(__assign(__assign(__assign({}, DEFAULT_OPTIONS), optionsOrCallback), { tintColor: (0, react_native_1.processColor)(optionsOrCallback.tintColor || DEFAULT_OPTIONS.tintColor) }), callback);
    };
    ImagePicker.prototype.launchCamera = function (options, callback) {
        return nativeInterface_1.default.launchCamera(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { tintColor: (0, react_native_1.processColor)(options.tintColor || DEFAULT_OPTIONS.tintColor) }), callback);
    };
    ImagePicker.prototype.launchImageLibrary = function (options, callback) {
        return nativeInterface_1.default.launchImageLibrary(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { tintColor: (0, react_native_1.processColor)(options.tintColor || DEFAULT_OPTIONS.tintColor) }), callback);
    };
    return ImagePicker;
}());
exports.default = new ImagePicker();
__exportStar(require("./internal/types"), exports);
