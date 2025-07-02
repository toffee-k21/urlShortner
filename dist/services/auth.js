"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.setUser = void 0;
const sessionIdToUserMap = new Map();
const setUser = (sessionId, user) => {
    sessionIdToUserMap.set(sessionId, user);
};
exports.setUser = setUser;
const getUser = (sessionId) => {
    return sessionIdToUserMap.get(sessionId);
};
exports.getUser = getUser;
