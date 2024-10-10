"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
exports.redirectIfNotAuthenticated = redirectIfNotAuthenticated;
// auth.ts
function isAuthenticated() {
    var userData = localStorage.getItem('userData');
    return userData !== null;
}
function redirectIfNotAuthenticated(redirectUrl) {
    if (!isAuthenticated()) {
        window.location.href = redirectUrl;
    }
}
